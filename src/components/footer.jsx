import React from "react"

const terms = [
  {
    title: "Some",
    description: "Although we usually use 'some' the same way the rest of Canada does('I want some pie') some of us also use it as a modifier to show exactly how strongly we feel about something. 'That car was going some fast.'"
  },
  {
    title: "Buddy",
    description: "Don’t know someone’s name ? No problem, 'Buddy' works just as well—whether you’re talking to them or about them. It’s mainly used to refer to men, though. 'Hey look, Buddy left his gloves behind.' Or 'Hey Buddy, how’re you doing tonight ?'"
  },
  {
    title: "Go on!",
    description: "If we say this after you’ve said something, it either means we literally don’t believe you, or you’ve said something surprising. 'School’s cancelled because of a couple of centimetres of snow ? Go on!'"
  },
  {
    title: "Stunned",
    description: "If someone tells you you’re stunned, there’s a pretty good chance they aren’t referring to your state of consciousness(that would be weird). They’re actually insulting your intelligence. 'You posted your email password on Twitter ? Are you stunned ?'"
  },
  {
    title: "On me nerves!",
    description: "This one’s not just a Maritimism — it’s used just as frequently (maybe more) in Newfoundland. It’s usually used to convey a high level of irritation. 'It’s been snowing for a week straight. Oh me nerves!'"
  },
  {
    title: "Right",
    description: "Like 'some, ' this one can also be used as a replacement word for 'very.' 'Those New Brunswick boys who took that couch through the drive - through were right drunk.'"
  },
  {
    title: "Fill yer boots",
    description: "This one basically means, 'Go ahead, help yourself'. 'Maritimer #1: 'Mind if I finish the coffee? 'Maritimer #2: “Fill yer boots.'"
  },
  {
    title: "Go away",
    description: "“Go away” often slurs into 'Go ‘way, ' and it works a lot like “Go on!” It’s an exclaimed response to something unbelievable. 'The journalists’ union has been on strike for more than a year ? Go ‘way!'"
  },
  {
    title: "What are you sayin'?",
    description: "I know it sounds like we think you’re mumbling, but that’s not what we mean. We really want to know what you’ve been doing lately. 'Oh hey! I haven’t seen you in ages.What are you sayin’?'"
  },
  {
    title: "Slippy",
    description: "Nope, that’s not a typo. But it does mean exactly what you think it means: slippery. 'Careful walking out there later. The sidewalk is some slippy.'"
  }
]


export default class Footer extends React.Component {
  constructor(){
    super();
    this.state = {
      currentIndex: this.getRandomInt(9),
    }
    this.state = { ...this.state, currentTerm: terms[this.state.currentIndex]};
  }

  getRandomInt(max) {
    let index = Math.floor(Math.random() * Math.floor(max));
    return index;
  }

  revealTerm(event) {
    event.preventDefault();
    const termContainer = document.querySelector('.term');
    const termOpen = document.querySelector('.term-link-open');
    const termClose = document.querySelector('.term-link-close');
    const footer = document.querySelector('footer');
    const termNav = document.querySelectorAll('.term-link-nav');

    termNav.forEach((item) => {
      item.classList.toggle('hidden');
    })

    footer.classList.toggle('terms--open');
    termContainer.classList.toggle('hidden');
    termOpen.classList.toggle('hidden');
    termClose.classList.toggle('hidden');
  }

  changeTerm(event, direction) {
    event.preventDefault();
    if (direction === 'next') {
      const nextIndex = this.state.currentIndex === terms.length - 1 ? 0 : this.state.currentIndex += 1;
      this.setState({ currentIndex: nextIndex })
      this.setState({ currentTerm: terms[this.state.currentIndex]});
    } else {
      const prevIndex = this.state.currentIndex === 0 ? terms.length : this.state.currentIndex -= 1;
      this.setState({ currentIndex: prevIndex })
      this.setState({ currentTerm: terms[this.state.currentIndex] });
    }
  }

  render() {
    return (
      <footer>
        <div className="term-header">
          <a href="#" className="term-link-open" onClick={(event) => this.revealTerm(event)}>learn to speak like a Maritimer</a>
          <a href="#" className="term-link-close hidden" onClick={(event) => this.revealTerm(event)}>close</a>
          <div className="term-navigation">
            <a href="#" className="term-link-nav hidden" onClick={(event) => this.changeTerm(event, 'previous')}>previous</a>
            <a href="#" className="term-link-nav hidden" onClick={(event) => this.changeTerm(event, 'next')}>next</a>
          </div>
        </div>
        <section className="term hidden">
          <div className="term__introduction">
          </div>
          <h4 className="term__title">
            {this.state.currentTerm.title}
          </h4>
          <p className="term__description">
            {this.state.currentTerm.description}
          </p>
        </section>
      </footer>

    )
  }

}

