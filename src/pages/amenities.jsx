import React from "react"
import Beer from "../images/beer.svg";
import Lodging from "../images/lodging.svg";
import Lobster from "../images/Lobster.svg"
import Boat from "../images/boat.svg"
import Hike from "../images/hike.svg"

import SEO from "../components/seo"

const AmenitiesPage = () => (
  <>
    <SEO title="Amenities" />
    <section className="page">
      <article className="amenity">
        <div className="amenity__content">
          <h2 className="amenity__title">travel</h2>
          <div className="amenity__description">
            <p>
              For those planning to fly into New Brunswick, you have 3 options that are “close” to Campbellton.  Bathurst is an hour drive from Campbellton and may be the best option if you are planning to come directly to the wedding. However, it can be hard to drive an extra hour after a long journey across the country. If you plan to do a bit of exploring, we suggest flying into Fredericton or Moncton.  Both are roughly a 4 hours drive away. Moncton is known as the “Hub City” and would a good base to head to Nova Scotia or PEI and make a full east coast tour. Fredericton is the Capital City and has lots of east coast charm.
            </p>
            <p>
              If you let us know when you are flying in we can figure out airport pick ups.
            </p>
            <p>
              If you are from New Brunswick, we will leave it to you to google map :).
            </p>
          </div>
        </div>
        <div className="amenity__image-container">
          <img className="amenity__image" src={Hike} alt="travel" />
        </div>
      </article>
      <article className="amenity">
        <div className="amenity__content">
          <h2 className="amenity__title">lodging</h2>
          <div className="amenity__description">
            <p>
              Campbellton is a small town and options are limited.  We suggest the
              <a href="https://www.choicehotels.com/new-brunswick/campbellton/quality-inn-hotels/cn850?mc=llyxcncnnbl&pmf=canada">Civic Centre Hotel</a>
              or the <a href="https://www.facebook.com/SanfarResort/">Sanfar Resort</a>
              in Tide Head. There are also a few <a href="https://www.airbnb.ca/s/Campbellton--Canada">airbnbs</a>.
              If you are looking for a budget option you are invited to camp in Heidi's parents back yard or find a
              friendly local to go home with. We will have a shuttle to transport people back to Campbellton
              after the festivities are done.
            </p>
            <p>
              If you are having issues with finding a place to stay, please contact
              us and we will help you out! To our North Shore friends and family, if
              you would like to host a west coast traveller send us a message!
            </p>
          </div>
        </div>
        <div className="amenity__image-container">
          <img className="amenity__image" src={Lodging} alt="lodging" />
        </div>
      </article>
      <article className="amenity">
        <div className="amenity__content">
          <h2 className="amenity__title">destinations</h2>
          <div className="amenity__description">
            <p>
              In Campbellton, hike the <a href="http://parcsugarloafpark.ca/winter/todowinter">Sugarloaf </a> “Mountain” for an amazing view and go check out the <a href="https://www.pc.gc.ca/en/lhn-nhs/qc/ristigouche">sunken battleship</a> of the last battle between the French and English in North America (that one is for you, Steve).
            </p>
            <p>
              In Fredericton, it is really all about the food and drink for us but for a taste of culture go to the <a href="http://beaverbrookartgallery.org/en">Beaver Brook Art Gallery</a> to see the Salvador Dali.
            </p>
            <p>
              In Moncton, check out the Tidal Boar and if the tides are high maybe even <a href="https://www.youtube.com/watch?v=lYPPuzcncBw">surf it</a>. Moncton is only a short drive from the Bay of Fundy where you will see the highest tides in the world.
            </p>
          </div>
        </div>
        <div className="amenity__image-container">
          <img className="amenity__image" src={Boat} alt="destinations"/>
        </div>
      </article>
      <article className="amenity">
        <div className="amenity__content">
          <h2 className="amenity__title">cuisine</h2>
          <div className="amenity__description">
            <p>
              In Fredericton, eat samosas at the Fredericton Saturday market (our favourite is the cheese and olive!)
              and have a lobster roll or deep fried clams at the Cabin.
            </p>
            <p>

              Honestly, we don’t know much about Moncton, we go there and my brother and sister in-law cook for us.
              Saul does a mean deep friend turkey though. We will send his address if interested.
            </p>
            <p>
              Campbellton is on the border of Quebec so you can get a pretty high standard poutine wherever you go.
              We highly recommend <a href="https://www.facebook.com/smokeonthewatersmokehousebbq/">Smoke on the Water</a>.
              They have a sweet potato poutine that is life changing! We also suggest
              the <a href="https://www.facebook.com/pages/Country-Kitchen-Restaurant/250406621645890"> Country Kitchen</a >
              which is in Heidi’s home community of Glen Levit.
            </p>
          </div>
        </div>
        <div className="amenity__image-container">
          <img className="amenity__image" src={Lobster} alt="food"/>
        </div>
      </article>
      <article className="amenity">
        <div className="amenity__content">
          <h2 className="amenity__title">beverages</h2>
          <div className="amenity__description">
            <p>
              Campbellton is on the boarder of Quebec, so that means $1 Coors Light, Bud Light and Bud but
              take note the Supreme Court Canada reasoned against “Freeing the Beer” and the number of beer
              that can travel across the Quebec to New Brunswick border is limited.
              <a href="https://torontosun.com/news/national/free-the-beer-why-cant-you-enjoy-beer-from-a-different-province-this-long-weekend">Read more.</a>
            </p>
            <p>
              Moncton has the best blueberry beer that ever was brewed at <a href="https://pumphousebrewery.ca/">Pumphouse Brewery</a>.
            </p>
            <p>
              If you fly into Fredericton, the last time we were there we heard a rumour it was boasting
              itself as the place with the most craft beer companies per capita. <a href="http://picaroons.ca/the-picaroons-roundhouse-is-now-open/">Picaroons</a>
              has a great view of the City and <a href="https://www.redrovercider.com/">Red Rover Cider</a> is delicious for those cider lovers out there.
            </p>
          </div>
        </div>
        <div className="amenity__image-container">
          <img className="amenity__image tall" src={Beer} alt="beverages" />
        </div>
      </article>
    </section>
  </>
)

export default AmenitiesPage
