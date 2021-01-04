import React, { Component } from "react"
import photos from '../1-atoms/photos'

class Slider extends Component {

    // constructor(props) {
    //     super(props)
    // }
    componentDidMount() {
        // Funcion slider
        let actual = 0;
        const slide = document.querySelectorAll(".img-photos")
        const slider = document.getElementById('slider')
        const arrowLeft = document.getElementById('prev')
        const arrowRight = document.getElementById('next')
        const dots = document.querySelectorAll('.dot')
        const run = (actual) => {
            slide.forEach((i) => i.style.display = "none")
            dots.forEach((d) => d.classList.remove("active"))

            slide[actual].style.display = "block"
            dots[actual].classList.add("active")
        }

        run(actual)
        // Next and Previous
        const next = () => {
            actual >= slide.length - 1 ? actual = 0 : actual++
            run(actual)
        }
        const prev = () => {
            actual <= 0 ? actual = slide.length - 1 : actual--
            run(actual)
        }

        arrowLeft.addEventListener('click', prev)
        arrowRight.addEventListener('click', next)

        //Dots for navigation forEach(element,index,array)
        dots.forEach((i, index) => {
            i.addEventListener("click", () => run(index))
        })

        // Set Interval
        function lala() {
            let lolo = setInterval(next, 3000)
            slider.addEventListener('mouseenter', () => {
                window.clearInterval(lolo);
                arrowLeft.classList.add('active-arrow')
                arrowRight.classList.add('active-arrow')
            })
        }
        lala()
        slider.addEventListener('mouseleave', () => {
            lala()
            arrowLeft.classList.remove('active-arrow')
            arrowRight.classList.remove('active-arrow')
        })
    }




    render() {
        return (
            <div className="slider" id="slider">
                {photos.map(i => <img key={i.promo} className="img-photos" src={i.photo} alt="wallpaper" />)}
                <div className="dots-container">
                    {photos.map(i => <span key={i.id} className="dot" />)}
                </div>
                <i className="fas fa-chevron-left prev" id="prev" ></i>
                <i className="fas fa-chevron-right next" id="next" ></i>
            </div>
        )
    }




}


export default Slider