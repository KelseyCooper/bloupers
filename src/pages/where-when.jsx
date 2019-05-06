import React from "react"

import SEO from "../components/seo"
import NB from "../images/nb.svg"

const WhereWhenPage = () => (
  <>
    <SEO title="Where/when" />
    <section className="page">
      <img className="where-page__image" src={NB} alt="New Brunswick" />
      <h1 className="where-page__title">Beautiful New Brunswick</h1>
      <div className="where-page__introduction">
        <p>
          On August 31, 2019, We would be thrilled if you joined us for our east coast
          back yard wedding at 538  Restigouche, Mann’s Mountain. Mann’s Mountain is a small community
          outside of Campbellton, New Brunswick that runs along the beautiful Restigouche River. The theme
          is  summer backyard east coast party so bring your summer dresses and button ups but a hoodie to cozy up in when
          we continue our party around the camp fire after dark. The ceremony will be at 3 pm, we will have
          dinner and of course drinks!

        </p>

        <p>
          We are excited to share the east with our west coast family, spend time with our east coast family and bring everyone all
          together in one place. The website has information about what to see, to do and to eat in
          New Brunswick. We want to make coming to our wedding as easy as possible for everyone, so if you have
          any questions or issues please do not hesitate to contact us and we will  do anything we can to help.
        </p>
      </div>
    </section>
  </>
)

export default WhereWhenPage
