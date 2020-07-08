// при наведении курсора срабатывает обработчик. 
// и добавляет элемент с текстом цветового элемента в пикер тайтл
// при отстутсвии курсора-объект удаляется 





import React from 'react';



const colorButtons=[
    {
        color:'Coral',
        className:'coral',
    },

    {
        color:'Aqua',
        className:'aqua',
    },
    {
        color:'Bisque',
        className:'bisque',
    },
]

class ColorPicker extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text:'',
        }
    }


    setColor=(color)=>{  
        this.setState({text:color})
    }


    render(){
        return(
            <div>
                 <div className="picker__title">
                     {this.state.text}
                </div>
                {colorButtons.map(el=>(
                    <button
                        key={el.color}
                        onMouseEnter={()=>this.setColor(el.color)}
                        onMouseLeave={()=>this.setColor('')}
                        className={`picker__button picker__button_${el.className}`}
                    ></button>
                ))}
                 {/* <div>
                    <button
                        onMouseEnter={()=>this.setColor('Coral')}
                        onMouseLeave={()=>this.setColor('')}
                        className="picker__button picker__button_coral">
                    </button>
                    <button
                      onMouseEnter={()=>this.setColor('Aqua')}
                      onMouseLeave={()=>this.setColor('')}
                    className="picker__button picker__button_aqua"></button>
                    <button 
                      onMouseEnter={()=>this.setColor('Bisque')}
                      onMouseLeave={()=>this.setColor('')}
                    className="picker__button picker__button_bisque"></button>
                 </div> */}
            </div>
        )
    }
}
export default ColorPicker;





