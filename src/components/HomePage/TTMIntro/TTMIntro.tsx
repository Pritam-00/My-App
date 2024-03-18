import React, { useState } from "react";

export default function TTMIntro () {

        const [isClicked, setIsClicked] = useState(false)

        function handleClick () {
            setIsClicked(condition => !condition)
        }
    return (
        <>
        <div className=" font-roboto font-light relative ">
            <h2 className=" text-stone-600 font-roboto font-semibold text-3xl 
                            mx-4 mb-2 mt-6 md:ml-20 lg:ml-60">The idea that created</h2>
            <div className="h-1 w-16 ml-4 md:ml-20 lg:ml-60 bg-orange-400"></div>
            <p className={` mt-6 mx-4 md:mx-20 lg:mx-60 ${isClicked? 'pb-20':'max-h-96 overflow-hidden ' }`}>
                
                The inception of “The Trail Makers” emerged from a profound love for the 
                Indian Himalayas and a burning desire to unearth its hidden treasures. 
                It was a realization that the true essence of trekking lay in exploring 
                the untouched, less-trodden paths that crisscross this majestic range.
                <br></br> <br></br>
                We were driven by a vision to share the untamed beauty of the Himalayas 
                with the world. We understood that beyond the popular routes lay a world 
                of wonder waiting to be discovered, where each step unveiled a new vista, 
                and each turn revealed a breath taking landscape.
                <br></br> <br></br>
                We also learned the need to promote sustainable tourism, 
                to leave behind no trace of our passage, and to ensure that 
                future generations could also revel in the pristine grandeur 
                of these mountains. The idea was to forge a connection, not 
                just between humans and nature, but between fellow explorers 
                and the heart of the Himalayas.
                <br></br> <br></br>
                “The Trail Makers” was born out of this passion, a venture dedicated 
                to crafting experiences that transcended the ordinary. It was founded
                on the belief that true adventure lies beyond the familiar trails,
                where the spirit of discovery reigns supreme. Our mission was clear 
                – to lead adventurers into the depths of the Indian Himalayas, to witness 
                landscapes rarely seen, and to create memories that would last a lifetime.</p>      
        
                <div className={`text-center  bottom-0 left-0 right-0
                                absolute
                                ${isClicked ? ''
                                :'pt-48 bg-gradient-to-t from-black via-black via-5% to-transparent'}`}>

                    <button 

                        onClick={handleClick}
                    
                        className={`font-semibold p-4 ${isClicked ? 'text-black' : 'text-white'}`}>
                        
                        {isClicked?'Read Less':'Read More'}
                        
                    </button>
                </div>
        </div>
        
    </>
    )
}