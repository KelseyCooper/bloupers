import React from "react"

import SEO from "../components/seo"

class rsvpPage extends React.Component {
  constructor(){
    super();
    this.state = { value: 'yes' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const actionUrl = this.state.value === 'yes' ? "/success" : "/success2"
    return (
      <>
        <SEO title="SEO" />
        <section className="page">
          <div className="rsvp">
          <p className="rsvp__introduction">
            We are doing all of our invites electronically so please fill out this form to let us know if you can make it. If the internet is not your thing just give us a call!
          </p>
            <form
              name="contact"
              method="post"
              action={actionUrl}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="field half first">
                <label htmlFor="names">guest name(s):</label>
                <input type="text" name="names" id="names" />
              </div>
              <label htmlFor="rsvp">can you join us?</label>
              <select
                className="select-css"
                value={this.state.value}
                onChange={this.handleChange}
                name="rsvp" id="rsvp"
                >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <div className="field half first">
                <label htmlFor="diet">dietary retrictions:</label>
                <input type="text" name="diet" id="diet" />
              </div>
              <div className="field half first">
                <label htmlFor="music">song requests:</label>
                <input type="text" name="music" id="music" />
              </div>
              <button
                className="rsvp__button"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </>
    )
  }
}

export default rsvpPage
