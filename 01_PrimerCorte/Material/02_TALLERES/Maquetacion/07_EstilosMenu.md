# Estilo de menu

![image](https://user-images.githubusercontent.com/31961588/184897918-f322e3e1-4940-48b1-94e4-297e43f7ec65.png)


![image](https://user-images.githubusercontent.com/31961588/184898121-c2730afa-7c3c-430b-a0b8-85bb469f6292.png)


![image](https://user-images.githubusercontent.com/31961588/184898575-69f220a1-f70f-49e5-aec5-36fa7cc6e98a.png)}


**Barra de Navegación**
```css
/* Barra de Navegación */

#nav{
    width: 100%;
    background-color: #333333;
    color: white;
    height: 40px;
    font-family: sans-serif, Helvetica, Arial;
    font-size: 14px;
    box-shadow: 0px, 0px 2px gray;
}

#nav ul{
    list-style: none;
    margin: 0px auto;
    width: 1090px;
}

#nav > ul > li{
    line-height: 40px;
    float: left;
    border-right: 1px solid gray;
    transition: 300ms;
}

#nav > ul > li > a{
    display: block;
    color: white;
    padding-right: 20px;
    padding-left: 20px;
}

#nav > ul > li:first-child{
    border-left: 1px solid gray;
}

#nav > ul > li:hover{
    background-color: #70b231;
    box-shadow: 0px 0px 4px #70b231 inset;
}
```
