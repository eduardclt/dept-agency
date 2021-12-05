import './clients.sass';

function Clients() {
  let logos = [
    {
      src: require("../../assets/images/logos/ABN_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Adidas_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/KLM_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Triumph_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Mona_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Nivea_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/NN_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Oxxio_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Pathe_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Tomtom_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Transavia_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Triumph_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Unilever_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Walibi_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Zalando_logo_zwart.jpg")
    },
    {
      src: require("../../assets/images/logos/Ziggo_logo_zwart.jpg")
    }
  ];

  return (
    <div className="component clients">
      <div className='clients__header'>
        <h1 className='title'>Clients</h1>
        <p className='description'>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
      </div>

    <div className='clients__logo-box'>
        {logos.map((logo, index) =>
          <div className='clients__logo-container'>
            <img key={index} alt='client logo' className='logo' src={logo.src.default} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Clients;
