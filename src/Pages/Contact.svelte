<script>
  import DividerWithText from '../Elements/DividerWithText.svelte';
  import TwoColumnLayout from '../Elements/TwoColumnLayout.svelte';
  import PageHeaderImage from '../Elements/PageHeaderImage.svelte';

  import company from '../static-content';
  console.log(company.address);
  console.log(company.address.toString());
</script>

<section>
  <PageHeaderImage src="/images/cafe-01.jpg" alt="Cafe"/>
  <div class="bg-color">
    <DividerWithText text="Contact" />
  </div>
  <TwoColumnLayout>
    <form class="email-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" slot='first'>
      <h2>Contact Us</h2>
      <hr/>
      <div hidden aria-hidden="true">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>
      <input type="text" name="name" placeholder="Your Name"/>
      <input type="email" name="email" placeholder="Your Email"/>
      <textarea name="message" placeholder="Your Message"/>
      <button type="submit">Send</button>
    </form>
    <div slot="second">
      <h2>We Are Located At</h2>
      <hr/>
      <p><b>{company.name}</b> is located in Tempe, AZ, at the NE Corner of McClintock and Southern.</p>
      <div class="row">
        <div class="address">
          <hr/>
          <h3>Our Address</h3>
          <p>{company.address}</p>
        </div>
        <div class="phone">
          <hr/>
          <h3>Our Phone</h3>
          <p>{company.phone}</p>
        </div>
      </div>
    </div>
  </TwoColumnLayout>

</section>

<style>
  section {
    background-color: var(--primary-color);
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  h2, h3 {
    color: var(--alternate-color);
  }

  p {
    color: var(--alternate-color-light);
    font-size: 1.1em;
    line-height: 1.2em;
  }

  .bg-color {
    background: var(--primary-background-color);
  }

  .email-form {
    display: flex;
    flex-direction: column;
  }

  hr {
    vertical-align: middle;
    border-bottom: 2px solid #c7a17a;
    margin: 0 0 1.5em 0;
    width: 120px;
  }

  input {
    padding: 1em;
    margin: 1em 0;
  }

  ::placeholder {
    color: var(--secondary-color);
    opacity: 1;
  }

  button {
    padding: 1em;
    margin: 1em 25%;
    font-size: 1.2em;
    width: 50%;
  }

  textarea {
    padding: 1em;
    margin: 1em 0;
    min-height: 12em;
  }
</style>
