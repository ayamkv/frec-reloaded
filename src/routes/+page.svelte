<script>
    
    import Icon from '@iconify/svelte';
    export let data;
    const { links } = data;
    const { profile } = data;


    console.log(profile)
</script>

<header>
    <a
      href={data.profile.social_link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://ee2poimw.directus.app/assets/{data.profile.profile_image}"
        alt={data.profile.username}
      />
      <h1>{data.profile.username}</h1>
      <p>{data.profile.description}</p>
    </a>
  </header>

<!-- <h2>Links</h2>
-->



<section>
    <ul>
        {#each links as link}
            <a href={link.href} target="_blank" rel="noreferrer">
            <li style="background: linear-gradient(to right, {link.left}, {link.right})">
            <Icon icon={link.icon} style="color: white" />
            </li>
            <h2>{link.Title}</h2>
            <span class="subtitle">{link.subtitle}</span>
        </a>
      {/each}
    </ul>
</section>

<p class="codeby">made with <a href="https://github.com/frec-reloaded"><b>Linko</b></a> </p>
<p class="codebyp">by @raaharja</p>
<style>
    .codeby {
        margin: 8em 1em 0em 0em;
        text-align: center;
        font-weight: 500;
        line-height: 0;
        transition: all 0.2s ease-in-out;
    }
    .codebyp {
        font-size: 0.75em;
        margin-bottom: 4em;
        text-align: center;
        transition: all 0.2s ease-in-out;
    }

    .codeby a {
        color: #9429ff;
    }

    .codeby:hover, .codebyp:hover {
        transform: scale(1.1);
        color: #6929ffcf;
    }
    

    header img {
        height: 124px;
        width: 124px;
        border-radius: 50%;
        margin-bottom: 32px;    

        transition: transform .2s;
        position: relative;
    }

    header img:hover {
        transform: scale(1.1);

    }
    header h1 {
        line-height: 0.1em;
        transition: all 0.1s linear;
    }
    header p {
        font-size: 120%;
        color: #c5c2da;
        margin-bottom: 0.25em;
    }


    header h1:hover {
        transform: scale(1.1);
        color: #947edf;

    }

    header a {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1 {
        font-weight: 600;
    }
    h2 {
        font-weight: 500;
    }

    a {
        text-decoration: none;
    }

    section {
        margin-top: 1em;
        transform: translateX(-4%);
    }
    ul {
        list-style-type: none;
    }

    section ul {
        margin-top: 1rem;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
    }

    section ul h2 {
        font-size: 150%;
        color: #ffffff;
        margin-top: 10px;
        font-weight: 600;
        margin-bottom: 0px;    
        transition: transform .2s;
        position: relative;

    }

    section ul span {
        font-size: 90%;
        color: #6b6480;
        margin-top: 0px;
        font-weight: 500;

        transition: transform .5s;
        position: relative;
    }
    section ul span:hover{
        color: #947edf;
    }

    section ul h2:hover{
        transform: scale(1.05);
    }

    section ul li:hover{
        transform: scale(1.05);
    }

    section ul li {
        background-color: blue;
            width: 20rem;
            height: 6rem;
            max-width: 40rem;
            min-height: 10px;
        border-radius: 0.7rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: relative;
        transition: transform .2s;
    }

    section ul li :global(svg) {
        font-size: 14em;
        width: 40px;
        height: 40px;
        max-width: 40rem;
        min-height: 50px;
    }


    span {
        max-width: 80%;
        text-align: center;
        line-height: 23px;
        font-weight: 400;
    }

    span.new {
        position: absolute;
        top: -0.5rem;
        right: 0.5rem;
        border-radius: .2rem;
        background-color: white;
        z-index: 1;
        padding: .2rem 1rem;
        font-size: 1rem;
        font-weight: 400;
        color: black;
    }
    span.disabled {
        position: absolute;
        top: -0.5rem;
        right: 0.5rem;
        border-radius: .2rem;
        z-index: 1;
        padding: .2rem 1rem;
        font-size: 1rem;
        font-weight: 400;
        color: white;
        background-color: gray;
    }
    span.disabled:hover {
        transform: scale(1);
        color: black;
    }


    @media only screen and (max-width: 768px) {
  /* For mobile phones: */

  section ul li {
        width: 15rem;
        max-width: 100%;
        height: 90px;
    }

    section ul {
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
    }
}

  @media screen and (max-width: 1125px) {
    section ul {
        gap: 0.5rem;
        grid-template-columns: repeat(2, 2fr);
    }
}   




@media screen and (max-width: 535px) { /* ou 767px */
    body {
        font-size: 10px;
    }
    
    span {
        line-height: 1em;
    }

    section ul li {
        width: 10rem;
        max-width: 50rem;
        height: 90px;
    }

    section ul {
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }

    span.new {
        top: -0.8rem;
        right: 1rem;
        font-size: 0.8rem;
    }
    .codeby{
        font-size: 14px;
    }
    .codebyp{
        font-size: 10px;
    }
}



</style>
