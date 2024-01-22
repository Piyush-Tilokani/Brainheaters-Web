import React, { Component } from 'react';
import WhatsAppDropdown from '../components/Dropdown/WhatsAppDropdown';
import InstagramDropdown from '../components/Dropdown/InstagramDropdown';
import YouTubeDropdown from '../components/Dropdown/YouTubeDropdown';

class Topdiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDropdown: null,
    };
  }

  toggleDropdown = (dropdown) => {
    this.setState((prevState) => ({
      activeDropdown: prevState.activeDropdown === dropdown ? null : dropdown,
    }));
  };

  render() {
    const { activeDropdown } = this.state;

    return (
      <div className="Topdiv">
        <style jsx>{`
          .Topdiv {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            background: #E9F9FF;
            height: 4rem;
            width: 100%;
          }

          .logo img {
            max-width: 2rem;
            height: 2rem;
            margin-left: 15rem;
          }

          .title-and-subtitle {
            display: flex;
            flex-direction: row;
            margin-right: 20rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }

          .title-text {
            color: #26282D;
            font-family: Gordita Medium;
            font-size: 0.875rem;
            line-height: normal;
            letter-spacing: -0.00875rem;
            margin-top: 0.75rem;
            margin-right: 0.75rem;
          }

          .subtitle-text {
            color: #26282D;
            font-family: Gordita Regular;
            font-size: 0.75rem;
            line-height: normal;
            letter-spacing: -0.0075rem;
            margin-top: 0.9rem;
          }

          .options {
            display: flex;
            align-items: center;
          }

          .social-option {
            display: flex;
            align-items: center;
            cursor: pointer;
            margin: 0 1rem;
          }

          .social-text {
            margin-right: 8px;
            padding-right: 8px;
          }

          .text-option p {
            margin: 0;
            font-weight: bold;
            cursor: pointer;
          }

          .whatsapp p {
            color: #2DAA5F;
            font-family: Gordita Medium;
            font-size: 0.875rem;
            line-height: normal;
            letter-spacing: -0.00875rem;
          }

          .instagram p {
            color: #8F34D7;
            font-family: Gordita Medium;
            font-size: 0.875rem;
            line-height: normal;
            letter-spacing: -0.00875rem;
          }

          .youtube p {
            color: #FF3939;
            font-family: Gordita Medium;
            font-size: 0.875rem;
            line-height: normal;
            letter-spacing: -0.00875rem;
          }

          .white-box {
            position: relative;
            background-color: white;
            width: 50px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            margin-left: 2px;
            margin-right: 8px; /* Added margin for space */
          }

          .white-box p {
            margin: 0;
            font-size: 0.8rem;
            color: #333;
            color: #595959;
            font-family: Gordita Medium;
            line-height: normal;
            letter-spacing: -0.00625rem;
          }

          .dropdown-icon {
            width: 16px;
            height: 16px;
            margin-left: 4px;
          }
        `}
        </style>

        <div className="logo">
          <img src="images/hey.png" alt="Logo" />
        </div>
        <div className="title-and-subtitle">
          <h1 className="title-text">Join Brainheaters Community:</h1>
          <p className="subtitle-text">Students from over 360+ Colleges, Direct chat with our Founder & Team 24x7 :)</p>
        </div>
        <div className="options">
          <div
            className={`social-option whatsapp ${activeDropdown === 'whatsapp' ? 'active' : ''}`}
            onClick={() => this.toggleDropdown('whatsapp')}
          >
            <p className="social-text whatsapp">Bh.Whatsapp</p>
            <div className="white-box">
              <p>67.7k</p>
            </div>
            <img
              className="dropdown-icon"
              src="images/down-arrow.png"
              alt="Dropdown Icon"
            />
          </div>
          <div
            className={`social-option instagram ${activeDropdown === 'instagram' ? 'active' : ''}`}
            onClick={() => this.toggleDropdown('instagram')}
          >
            <p className="social-text instagram">Bh.Instagram</p>
            <div className="white-box">
              <p>59.1k</p>
            </div>
            <img
              className="dropdown-icon"
              src="images/down-arrow.png"
              alt="Dropdown Icon"
            />
          </div>
          <div
            className={`social-option youtube ${activeDropdown === 'youtube' ? 'active' : ''}`}
            onClick={() => this.toggleDropdown('youtube')}
          >
            <p className="social-text youtube">Bh.YouTube</p>
            <div className="white-box">
              <p>42.4k</p>
            </div>
            <img
              className="dropdown-icon"
              src="images/down-arrow.png"
              alt="Dropdown Icon"
            />
          </div>
        </div>
        {activeDropdown === 'whatsapp' && <WhatsAppDropdown show={true} />}
        {activeDropdown === 'instagram' && <InstagramDropdown show={true} />}
        {activeDropdown === 'youtube' && <YouTubeDropdown show={true} />}
      </div>
    );
  }
}

export default Topdiv;
