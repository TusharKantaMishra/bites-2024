import React from 'react'
import './Sponsors.css'

const Sponsors = () => {
  return (
    <>
      <h1 className='heading'>Sponsor Options for BITES-2024</h1>
      <h1 className="body">* We are pleased to offer you a variety of sponsorship opportunities that will assist you in achieving your business goals. <br />
        * Sponsoring BITES 2024 offers a unique opportunity for a company or organization to increase its visibility and product awareness within a highly specialized, influential community. <br />
        * Sponsor acknowledgments, including the company's name, product, and logo, will appear on the conference's main page and in all official conference documentation.
      </h1>
      <div className="sponsor">
        <div className="sponsor-heading">
          <h1 className="sponsor-heading-platinum">Platinum Sponsorship [INR 3,00,000 / USD 8000]</h1>
        </div>
        <div className="table-container">
          <table className="table table-bordered table-striped table-hover">
            <tbody>
              <tr className='t-body'>
                <th scope="row">1</th>
                <td>Company logo in all publication materials/ website</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">2</th>
                <td>Six free registration</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">3</th>
                <td>Talk for 30 minutes</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">4</th>
                <td>Banners on the both side of stage</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">5</th>
                <td>Stall of 8 feet size</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">6</th>
                <td colspan="3">The inner cover page or inner/ outer bottom page advertisement in the proceedings</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">7</th>
                <td colspan="3">One poster presentation space</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">8</th>
                <td colspan="3">Banner on the conference Venue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="sponsor">
        <div className="sponsor-heading">
          <h1 className="sponsor-heading-gold">Gold Sponsorship [INR 1,50,000 / USD 4000]</h1>
        </div>
        <div className="table-container">
          <table className="table table-bordered table-striped table-hover">
            <tbody>
              <tr className='t-body'>
                <th scope="row">1</th>
                <td>Company logo in all publication materials/ website</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">2</th>
                <td>Three free registration</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">3</th>
                <td>The inner cover page or inner/ outer bottom page advertisement in the proceedings</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">4</th>
                <td>One poster presentation space</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">5</th>
                <td>Stall of 6 feet size</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">6</th>
                <td colspan="3">Banner on the conference Venue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="sponsor">
        <div className="sponsor-heading">
          <h1 className="sponsor-heading-silver">Silver Sponsorship [INR 70,000 / USD 2000]</h1>
        </div>
        <div className="table-container">
          <table className="table table-bordered table-striped table-hover">
            <tbody>
              <tr className='t-body'>
                <th scope="row">1</th>
                <td>Company logo in all publication materials/ website</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">2</th>
                <td>Two free registration</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">3</th>
                <td>The inner cover page or inner/ outer bottom page advertisement in the proceedings</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">4</th>
                <td>One poster presentation space</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">5</th>
                <td>Stall of 4 feet size</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">6</th>
                <td colspan="3">Banner on the conference Venue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="sponsor">
        <div className="sponsor-heading">
          <h1 className="sponsor-heading-bronze">Bronze Sponsorship [INR 40,000 / USD 1200]</h1>
        </div>
        <div className="table-container">
          <table className="table table-bordered table-striped table-hover">
            <tbody>
              <tr className='t-body'>
                <th scope="row">1</th>
                <td>Company logo in all publication materials/ website</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">2</th>
                <td>One free registration</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">3</th>
                <td>One-page advertisement in the proceedings</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">4</th>
                <td>One poster presentation space</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h4>
          # Additional Sponsorship opportunities:
        </h4>
        <p className='body'>
          o Conference kit with stationary
          o Gala dinner
          o Lunch/Dinner
          o High Tea</p>
      </div>
      <div>
        <div className="table-container">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr className='t-head-sponsor'>
                <th scope="col">Sponsorship Opportunities</th>
                <th scope="col">Cost in INR/USD</th>
              </tr>
            </thead>
            <tbody>
              <tr className='t-body'>
                <th scope="row">Platinum Conference Sponsor</th>
                <td>INR 3,00,000/USD $8000</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">Gold Conference Sponsor</th>
                <td>INR 1,50,000/USD $4000</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">Silver Conference Sponsor</th>
                <td>INR 70,000/USD $2000</td>
              </tr>
              <tr className='t-body'>
                <th scope="row">Bronze Sponsor</th>
                <td>INR 40,000/USD $1200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Sponsors