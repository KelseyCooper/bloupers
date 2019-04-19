import React from "react"
import Beer from "../images/beer.svg";
import Lodging from "../images/lodging.svg";
import Lobster from "../images/Lobster.svg"
import Boat from "../images/boat.svg"
import Hike from "../images/hike.svg"

import SEO from "../components/seo"

const AmenitiesPage = () => (
  <>
    <SEO title="Where/when" />
    <section className="page">
      <article className="amenity">
        <div className="amenity__content">
          <h2 className="amenity__title">lodging</h2>
          <div className="amenity__description">
            <p>
              Etiam sit amet massa finibus, ultricies sem vel, rutrum nunc.
              Phasellus congue magna elit, quis dictum metus semper in. Nam
              finibus quis diam non ornare. Duis blandit diam nec magna
              convallis, sed pellentesque lectus consectetur. Etiam placerat,
              diam nec elementum tempus, sem libero tincidunt dolor, quis
              pellentesque urna nisl eu eros. Vestibulum purus enim, rutrum
              vitae nulla id, hendrerit luctus arcu. Maecenas felis justo,
              luctus at congue id, auctor et metus. Aliquam erat volutpat.
              Donec pulvinar risus id congue mattis.
            </p>
            <p>
              Nam finibus quis diam non ornare. Duis blandit diam nec magna
              convallis, sed pellentesque lectus consectetur. Etiam placerat,
              diam nec elementum tempus, sem libero tincidunt dolor, quis
              pellentesque urna nisl eu eros. Vestibulum purus enim, rutrum
              vitae nulla id, hendrerit luctus arcu. Maecenas felis justo,
              luctus at congue id, auctor et metus. Aliquam erat volutpat.
              Donec pulvinar risus id congue mattis.
            </p>
          </div>
        </div>
        <div className="amenity__image-container">
          <img className="amenity__image" src={Lodging} />
        </div>
      </article>
      <article className="amenity">
        <div className="amenity__content">
          <h2 className="amenity__title">cuisine</h2>
          <div className="amenity__description">
            <p>
              Etiam sit amet massa finibus, ultricies sem vel, rutrum nunc.
              Phasellus congue magna elit, quis dictum metus semper in. Nam
              finibus quis diam non ornare. Duis blandit diam nec magna
              convallis, sed pellentesque lectus consectetur. Etiam placerat,
              diam nec elementum tempus, sem libero tincidunt dolor, quis
              pellentesque urna nisl eu eros. Vestibulum purus enim, rutrum
              vitae nulla id, hendrerit luctus arcu. Maecenas felis justo,
              luctus at congue id, auctor et metus. Aliquam erat volutpat.
              Donec pulvinar risus id congue mattis.
            </p>
            <p>
              Nam finibus quis diam non ornare. Duis blandit diam nec magna
              convallis, sed pellentesque lectus consectetur. Etiam placerat,
              diam nec elementum tempus, sem libero tincidunt dolor, quis
              pellentesque urna nisl eu eros. Vestibulum purus enim, rutrum
              vitae nulla id, hendrerit luctus arcu. Maecenas felis justo,
              luctus at congue id, auctor et metus. Aliquam erat volutpat.
              Donec pulvinar risus id congue mattis.
            </p>
          </div>
        </div>
        <div className="amenity__image-container">
          <img className="amenity__image" src={Lobster} />
        </div>
      </article>
      <article className="amenity">
        <div className="amenity__content">
          <h2 className="amenity__title">drink</h2>
          <div className="amenity__description">
            <p>
              Etiam sit amet massa finibus, ultricies sem vel, rutrum nunc.
              Phasellus congue magna elit, quis dictum metus semper in. Nam
              finibus quis diam non ornare. Duis blandit diam nec magna
              convallis, sed pellentesque lectus consectetur. Etiam placerat,
              diam nec elementum tempus, sem libero tincidunt dolor, quis
              pellentesque urna nisl eu eros. Vestibulum purus enim, rutrum
              vitae nulla id, hendrerit luctus arcu. Maecenas felis justo,
              luctus at congue id, auctor et metus. Aliquam erat volutpat.
              Donec pulvinar risus id congue mattis.
            </p>
            <p>
              Nam finibus quis diam non ornare. Duis blandit diam nec magna
              convallis, sed pellentesque lectus consectetur. Etiam placerat,
              diam nec elementum tempus, sem libero tincidunt dolor, quis
              pellentesque urna nisl eu eros. Vestibulum purus enim, rutrum
              vitae nulla id, hendrerit luctus arcu. Maecenas felis justo,
              luctus at congue id, auctor et metus. Aliquam erat volutpat.
              Donec pulvinar risus id congue mattis.
            </p>
          </div>
        </div>
        <div className="amenity__image-container">
          <img className="amenity__image" src={Beer} />
        </div>
      </article>
      <article className="amenity">
        <div className="amenity__content">
          <h2 className="amenity__title">historical</h2>
          <div className="amenity__description">
            <p>
              Etiam sit amet massa finibus, ultricies sem vel, rutrum nunc.
              Phasellus congue magna elit, quis dictum metus semper in. Nam
              finibus quis diam non ornare. Duis blandit diam nec magna
              convallis, sed pellentesque lectus consectetur. Etiam placerat,
              diam nec elementum tempus, sem libero tincidunt dolor, quis
              pellentesque urna nisl eu eros. Vestibulum purus enim, rutrum
              vitae nulla id, hendrerit luctus arcu. Maecenas felis justo,
              luctus at congue id, auctor et metus. Aliquam erat volutpat.
              Donec pulvinar risus id congue mattis.
            </p>
            <p>
              Nam finibus quis diam non ornare. Duis blandit diam nec magna
              convallis, sed pellentesque lectus consectetur. Etiam placerat,
              diam nec elementum tempus, sem libero tincidunt dolor, quis
              pellentesque urna nisl eu eros. Vestibulum purus enim, rutrum
              vitae nulla id, hendrerit luctus arcu. Maecenas felis justo,
              luctus at congue id, auctor et metus. Aliquam erat volutpat.
              Donec pulvinar risus id congue mattis.
            </p>
          </div>
        </div>
        <div className="amenity__image-container">
          <img className="amenity__image" src={Boat} />
        </div>
      </article>
      <article className="amenity">
        <div className="amenity__content">
          <h2 className="amenity__title">nature</h2>
          <div className="amenity__description">
            <p>
              Etiam sit amet massa finibus, ultricies sem vel, rutrum nunc.
              Phasellus congue magna elit, quis dictum metus semper in. Nam
              finibus quis diam non ornare. Duis blandit diam nec magna
              convallis, sed pellentesque lectus consectetur. Etiam placerat,
              diam nec elementum tempus, sem libero tincidunt dolor, quis
              pellentesque urna nisl eu eros. Vestibulum purus enim, rutrum
              vitae nulla id, hendrerit luctus arcu. Maecenas felis justo,
              luctus at congue id, auctor et metus. Aliquam erat volutpat.
              Donec pulvinar risus id congue mattis.
            </p>
            <p>
              Nam finibus quis diam non ornare. Duis blandit diam nec magna
              convallis, sed pellentesque lectus consectetur. Etiam placerat,
              diam nec elementum tempus, sem libero tincidunt dolor, quis
              pellentesque urna nisl eu eros. Vestibulum purus enim, rutrum
              vitae nulla id, hendrerit luctus arcu. Maecenas felis justo,
              luctus at congue id, auctor et metus. Aliquam erat volutpat.
              Donec pulvinar risus id congue mattis.
            </p>
          </div>
        </div>
        <div className="amenity__image-container">
          <img className="amenity__image" src={Hike} />
        </div>
      </article>
    </section>
  </>
)

export default AmenitiesPage
