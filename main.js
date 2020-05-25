class Testimonial{
    constructor(persons){
        this.persons = [

            {
                "name" : "John Tarkpor",
                "bio" :  "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
                "job"  : "Junior Front-end Developer",
                "image": "./images/image-john.jpg",
                "elementName" : "hidden",
            },
            {
                "name" : "Tanya Sinclair",
                "bio" : "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
                "job"  : "UX Engineer",
                "image": "./images/image-tanya.jpg",
                "elementName" : "active",
            },
        ]   
        
        this.loadTestimonial();
    }


     generateTestimonial = (person, index) => {
        return `
        <div class="testimonial__body ${person.elementName}">
           <div class="testimonial__body__text">
           ${person.bio}
             <div class="testimonial__body__info">
               <span class="testimonial__body__name">${person.name}</span> 
               <span class="testimonial__body__job">${person.job}</span>
              </div>
           </div>
           <div class="testimonial__body_image">
             <img src="${person.image}" alt="${person.name} ${person.job}"  class="testimonial_image">
             <div class="testimonial__body_button">
                 <img src="./images/icon-prev.svg" alt="previous button" class="testimonial__body_button--prev" onClick="testimonial.previousTestimonial(${index})">
                 <img src="./images/icon-next.svg" alt="next button" class="testimonial__body_button--next" onClick="testimonial.nextTestimonial(${index})">
           </div>
        </div>
        </div>`

    }

    loadTestimonial(){
        let testimonialHTML = this.persons.reduce((html, person, index) => html += this.generateTestimonial(person, index), '');
        document.getElementById('testimonial').innerHTML = testimonialHTML;
    }

    previousTestimonial(index){
        let numberOfItems = this.persons.length - 1;
        let $currentElement = document.querySelectorAll('.testimonial__body')[index];

        $currentElement.classList.toggle('hidden');

        if (index != 0){
            let nextElement =  document.querySelectorAll('.testimonial__body')[index - 1]
            nextElement.classList.remove('hidden');
            nextElement.classList.toggle('active');
        }else{
            let $startElement = document.querySelectorAll('.testimonial__body')[numberOfItems];
            $startElement.classList.remove('hidden');
            $startElement.classList.toggle('active');
        }

    }


    nextTestimonial(index){
            let numberOfItems = this.persons.length - 1;
            let $currentElement = document.querySelectorAll('.testimonial__body')[index];

            $currentElement.classList.toggle('hidden');

            if (index < numberOfItems){
                let nextElement =  document.querySelectorAll('.testimonial__body')[index + 1]
                nextElement.classList.remove('hidden');
                nextElement.classList.toggle('active');
            } else if(index === numberOfItems){
                let $startElement = document.querySelectorAll('.testimonial__body')[index - numberOfItems];
                $startElement.classList.remove('hidden');
                $startElement.classList.toggle('active');
            }
    }

}

window.addEventListener("load", function() {
  testimonial = new Testimonial();    
})