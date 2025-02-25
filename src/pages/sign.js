export default () => {
    return `
      <div class="avatar">
        <img class="avatar-img" width="240" height="240" src="./image/avatar.png"/>
      </div>
      <div class="wrapper-sign">
        <form class="form-sign">
          <div class="wrapper-inputs">
            <input
              class="input-sign"
              required=true
              placeholder="User name"
            />
            <input
              class="input-sign"
              required=true
              placeholder="Password"
            />
          </div>
          <a data-link href="/main/" class="link-to-main">
            <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.5441 16.4142C33.3251 15.6332 33.3251 14.3668 32.5441 13.5858L19.8162 0.857866C19.0351 0.0768173 17.7688 0.0768172 16.9877 0.857866C16.2067 1.63891 16.2067 2.90524 16.9877 3.68629L28.3015 15L16.9877 26.3137C16.2067 27.0948 16.2067 28.3611 16.9877 29.1421C17.7688 29.9232 19.0351 29.9232 19.8162 29.1421L32.5441 16.4142ZM0.0693358 17L31.1299 17L31.1299 13L0.0693361 13L0.0693358 17Z" fill="white"/>
            </svg>              
          </a>
        </form>
      </div>
      <div class="promo-text">
        PATRIC STAR OC 
        <svg width="60" height="58" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.6411 0.831055L36.62 22.3099L59.2042 22.3099L40.9332 35.5846L47.9121 57.0634L29.6411 43.7887L11.3701 57.0634L18.349 35.5846L0.0780239 22.3099L22.6622 22.3099L29.6411 0.831055Z" fill="#FF7979"/>
        </svg>          
      </div>
    `;
  };