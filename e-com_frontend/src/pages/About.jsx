import React from 'react'
import { assets } from '../assets/assets'

const About = () =>{
    return (
        <div>
            <div className="pt-5 text-center border-top">
                <h1>About Us</h1>
            </div>

            <div className="row my-5 gy-4 text-start">
                <div className="col-md-6">
                <img src={assets.about_img} alt="About Photo" className="img-fluid w-100" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center text-secondary">
                <p>
                    Step into a world of magic, mystery, and merchandise! At Wizarding Wardrobe, we bring the enchantment of Harry Potter to life through high-quality, fan-inspired products that celebrate the magic of Hogwarts and beyond.
                </p>
                <p>
                    Whether you're a brave Gryffindor, wise Ravenclaw, loyal Hufflepuff, or cunning Slytherin, our collection is designed to help you express your house pride and love for the wizarding world.
                </p>
                <strong className="text-dark">What We Offer</strong>
                <p>
                    <ol>
                        <li>
                            Spellbinding Apparel: T-shirts, hoodies, and robes that channel your inner witch or wizard.
                        </li>
                        <li>
                            Magical Accessories: Wands, jewelry, bags, and more to complete your magical look.
                        </li>
                        <li>
                            Home of Hogwarts: Decor, mugs, and collectibles to bring a touch of magic to your everyday life.
                        </li>
                        <li>
                            Exclusive Drops: Limited-edition items inspired by iconic moments, characters, and spells.
                        </li>
                    </ol>
                </p>
                <strong className="text-dark">Our Mission</strong>
                <p>
                    To create a magical shopping experience for fans of all ages by offering unique, officially inspired merchandise that celebrates the timeless legacy of Harry Potter.
                </p>
                <strong className="text-dark">Why Choose Us</strong>
                <p>
                    Because we believe magic should be part of everyday life. Our products are crafted with care, creativity, and a deep love for the wizarding world. Whether you're shopping for yourself or a fellow Potterhead, you'll find something truly enchanting here.
                </p>
                </div>
            </div>

        </div>
    )
}

export default About