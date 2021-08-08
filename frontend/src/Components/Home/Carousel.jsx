import Slider from 'infinite-react-carousel';

 const SimpleSlider = () => (
  <Slider autoplay dots>
    <div>
      <img style={{height:"600px"}} src={"https://forexceptionalkids.org/images/donationsHeaderTop.jpg"}/>
    </div>
    <div>
      <img style={{height:"600px"}} src={"https://www.thecuriousreader.in/wp-content/uploads/2018/02/Book-Giving-Day-_Why-You-Should-_Donate-Books-_To-Children-feature-image.png"}/>
    </div>
    <div>
      <img style={{height:"700px"}} src={"https://secureservercdn.net/198.71.233.83/a47.22b.myftpupload.com/wp-content/uploads/2019/01/Share-the-love-of-reading-on-International-Book-Giving-Day-1.jpg?time=1628192626"}/>
    </div>
  </Slider>
);

export {SimpleSlider}

