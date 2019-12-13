vue js 知识量化


0.ES6 补充
 
ES5 var 之前因为 if 和 for 都没有块级作用域的概念，所以在很多时候都必须借用 function 的作用域来解决应用外面变量的问题
ES6 加入 let 块级作用域 let是有 if 和 for 的块级作用域


const  使用const 修饰的标识符为常量，不可以再次赋值。
当我们修饰的标识符不会被再次赋值时候，就可以使用const 来保证数据的安全性
建议:在ES6 开发中，优先使用const，只有需要改变某一个标识符的时候才使用let
1.一旦给const修饰的标识符被赋值之后，不能修改
2.在使用const定义的标识符，必须进行赋值
3.常量的含义是指向的对象不能修改，但是可以改变对象内部的属性
例子：
const obj={
	"name":"vue",
	"age":18
}

obj.name = "hello"


对象字面量的增强写法
如 
const obj = new object()
const obj = {}
1.属性的增强写法
	const name = "hellp";
	const age = 18;
	
	ES5 
	const obj = {
		name:name,
		age:age
	}
	
	ES6 
	const obj = {
		name,
		age
	}
	
2.函数的增强写法
	
	ES5
	const obj = {
		run:function(){
			
		}
	}
	
	ES6
	const obj={
		run(){
			
		}
	}


1.了解Vue

	Vue 是一个渐进式框架
	
		渐进式：意味着可以将Vue作为你的应用的一部分嵌入项目
		将更多的业务逻辑使用Vue，可以使用Vue的核心库以及生态系统(Vue全家桶) Core+Vue-router+Vuex
		
	特点和web开发中常见的高级功能
	
		解耦视图和数据
		
		可复用的组件
		
		前端路由技术
		
		状态管理
		
		虚拟DOM
    
      el: 
            类型:string|HTMLElement
            作用:之后的Vue实例管理哪一个DOM
      
      dat: 
            类型:Object|Function
            作用:Vue实例对应的数据对象
          
      methods: 
            类型：{[key:string]|Function}
            作用:定义属于Vue是的方法
        
  
   [01-初识](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/01-%E5%88%9D%E8%AF%86/%E5%88%9D%E8%AF%86.html)

   [02-vue-list](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/01-%E5%88%9D%E8%AF%86/vue-list.html)

   [03-vue-计数器](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/01-%E5%88%9D%E8%AF%86/vue-%E8%AE%A1%E6%95%B0%E5%99%A8.html)

2.Vue 基础语法
  
   1.插值操作
      
   [01-mustache](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/02-%E6%8F%92%E5%80%BC%E6%93%8D%E4%BD%9C/01-mustache.html)

   [02-vue-once](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/02-%E6%8F%92%E5%80%BC%E6%93%8D%E4%BD%9C/02-v-once.html)

   [03-vue-html](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/02-%E6%8F%92%E5%80%BC%E6%93%8D%E4%BD%9C/03-v-html.html)

   [04-vue-text](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/02-%E6%8F%92%E5%80%BC%E6%93%8D%E4%BD%9C/04-v-text.html)

   [05-vue-pre](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/02-%E6%8F%92%E5%80%BC%E6%93%8D%E4%BD%9C/05-v-pre.html)

   [06-vue-cloak](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/02-%E6%8F%92%E5%80%BC%E6%93%8D%E4%BD%9C/06-v-cloak.html)
      
      
   2.绑定属性
 
   [01-vue-bine基本例子](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/03-v-bind%E7%BB%91%E5%AE%9A%E5%B1%9E%E6%80%A7/01-v-bind%E5%9F%BA%E6%9C%AC%E4%BE%8B%E5%AD%90.html)
   
   [02-vue-bind动态绑定class(对象语法)](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/03-v-bind%E7%BB%91%E5%AE%9A%E5%B1%9E%E6%80%A7/02-v-bind%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9Aclass(%E5%AF%B9%E8%B1%A1%E8%AF%AD%E6%B3%95).html)
   
   [03-vue-bind动态绑定class(数组语法)](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/03-v-bind%E7%BB%91%E5%AE%9A%E5%B1%9E%E6%80%A7/03-v-bind%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9Aclass(%E6%95%B0%E7%BB%84%E8%AF%AD%E6%B3%95).html)
   
   [04-vue-bind和v-for](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/03-v-bind%E7%BB%91%E5%AE%9A%E5%B1%9E%E6%80%A7/04-v-bind%E5%92%8Cv-for.html)
   
   [05-vue-bind动态绑定style(对象语法和数组语法)](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/03-v-bind%E7%BB%91%E5%AE%9A%E5%B1%9E%E6%80%A7/05-v-bind%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9Astyle(%E5%AF%B9%E8%B1%A1%E8%AF%AD%E6%B3%95%E5%92%8C%E6%95%B0%E7%BB%84%E8%AF%AD%E6%B3%95).html)
   
      
   3.计算属性
	  
   [01-计算属性的基本使用](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/04-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7/01-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html)
   
   [02-计算属性的复杂操作](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/04-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7/02-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84%E5%A4%8D%E6%9D%82%E6%93%8D%E4%BD%9C.html)
   
   [03-计算属性的getter和setter](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/04-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7/03-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84getter%E5%92%8Csetter.html)
   
   [04-计算属性和methods的对比](https://github.com/Crystal-LDJ/frontEndNotes/blob/master/learnVue/04-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7/04-%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%92%8Cmethods%E7%9A%84%E5%AF%B9%E6%AF%94.html)
   
	  
      
   4.事件监听
	 

      
   5.条件判断
	 
	 
	 
      
   6.循环遍历
	 
	 
	 
	 
      
   7.阶段案例
	 
	 
	 
  
   8.v-model
	 
	 
	 
	 

3.组件化开发

4.Vue CLI 详解

5.Vue-router

6.Vuex详解

7.网络封装

8.项目实战

9.项目部署

10.vue 原理




