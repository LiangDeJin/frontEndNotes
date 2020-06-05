## react-virtualized

### react virtualize 原理
```
1.先设置容器的宽高,
2.通过单元格的数量和单元格的宽高计算出总宽高,渲染一个带有滚动条的区域
3.通过滚动条的位置去计算哪些单元格会被渲染,
4.渲染单元格通过position:absolute绝对定位,并把他们放在滚动条区域内的位置
5.滚动时候计算哪些单元格需要渲染
```

### react virtualize 作用:
```
数据量特别大的时候,要创建和渲染的DOM 元素特别多,需要的时间成本很高,另外会导致浏览器卡顿严重，甚至有可能出现假死状态.
而react virtualize 解决思路就是只对可见区域进行渲染，用数组保存所有列表元素的位置，只渲染可视区内的列表元素，当可视区滚动时，根据滚动的offset大小以及所有列表元素的位置，计算在可视区应该渲染哪些元素这样达到减少DOM节点渲染的数量和提高性能
```

### react virtualize 使用属性:
```
AutoSizer：使用于一个子元素的情况，通过AutoSizer包含的子元素会根据父元素Resize的变化，自动调节该子元素的可视区的宽度和高度，同时调节的还有该子元素可视区真实渲染的dom元素的数目。

List：List是基于Grid来实现的，但是是一个维的列表，而不是网状。
值得注意的是这些基础组件都是继承于React中的PureComponent，因此当state变化的时候，只会做一个浅比较来确定重新渲染与否

width
height
rowHeight
rowCount
rowRenderer
```

-  [react-virtualized](https://segmentfault.com/a/1190000015023656)
### 为什么在React中渲染大量DOM会导致浏览器假死(15.x)？
```
来自上面的博客内容 https://segmentfault.com/a/1190000015023656
* 事件触发线程：当一个事件被触发时(鼠标点击，键盘敲击等)该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理。
* React使用 Virtual DOM跟diff算法来优化DOM的变更，这也意味着React在渲染出真实DOM的时候，所有的Virtual DOM树都在JS内存中。
* 并且React不会有一次更新就执行一次刷新操作，而是把所有的差异对比，放到一个差异队列，再一次性去执行patch方法进行更新与渲染（时间长）。
* 等到GUI线程去渲染真实的DOM时，由于渲染的DOM量太大，GUI执行的时间也会很长（页面会出现空白等状况）。
```

### react virtualize 能用react-sortable的原理和该怎么处理或实现:
```
鼠标按下事件: 选中的单元格会隐藏 并创建一个新的脱离文本流的单元格
鼠标移动事件: 同时伴随着鼠标滚动事件 单元格移动时候,通过鼠标移动数值和按下鼠标的数值的差值去判断当前创建的单元格的位置,其余的单元格会根据鼠标移动更改 transform:translate3d(x,y,z) 的y值
鼠标松开事件: 去除新的脱离文本流的单元格 根据移动的值更新单元格位置

sortableContainer 是所有可排序元素的容器；
sortableElement 是每个可渲染元素的容器。
 
SortableElement用来装饰每个要拖拽的组件，相对于SortableContainer 要装饰的组件，SortableElement 装饰的组件是子组件。
SortableElement 提供了一个 index 属性来进行子组件排序。
SortableContainer 提供一个方法 onSortEnd 。
onSortEnd这个函数可以解构两个形参。{oldIndex, newIndex} 一个是拖拽元素的标记，一个是将要放的那个地方标记。最后在使用 arrayMove 交换数组的位置。
axis 是拖拽的方向，默认是 y ，垂直拖拽，x 表示只可以水平拖拽
array-move 就一个 API，它的主要作用就是用来交换数组中元素的位置。
```


