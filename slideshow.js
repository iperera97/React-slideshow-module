const React = require("react");
const ReactDOM = require("react-dom");

//pagination
function Pagination(props){

    return(
        <div id="pagination">
            <button onClick={props.prev}>&lt;</button>
            <button onClick={props.next}>&gt;</button>
        </div>
    );
}

//main Component
class Slideshow extends React.Component {

    constructor(props){

        super(props);

        //init data
        this.state = {
            images : this.props.imgData,
            index : 0,
            timer: this.props.timer
        }

        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }//constructor

    prevSlide(){

        this.setState( (prevState)=>{

            return {
                index: ( prevState.index === 0 )? this.state.images.length - 1 : --prevState.index
            }
        });
    }//prevslide

    nextSlide(){

        this.setState( (prevState)=>{

            return{
                index: (prevState.index === this.state.images.length - 1)? 0 : ++prevState.index
            }            
        });
    }//nextslide

    componentDidMount(){

        setInterval(()=>{
            
            //set change
            this.setState((prevState)=>{

                return {
                    index: (prevState.index === prevState.images.length - 1)? 0: ++prevState.index
                }
            });

        }, this.state.timer);
    }//autoSlideShow

    render(){

        let displayIMG = this.state.images[this.state.index];

        return(
            <div id="slideshow">
                <img src={displayIMG}/>
                <Pagination prev={this.prevSlide} next={this.nextSlide}/>
            </div>
        );
    }//render
}


module.exports = Slideshow;