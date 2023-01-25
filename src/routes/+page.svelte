<script>
    
    import Icon from '@iconify/svelte';
    import { loadIcons } from '@iconify/svelte';
    import { onMount } from 'svelte';
    import { fade, fly, slide } from 'svelte/transition';
    export let data;

    const { links, profile } = data;
    // const { profile } = data;
    let ready = false;  
    const iconsRes = data.links.map(item => item.icon);

    loadIcons(iconsRes, (loaded, missing, pending, unsubscribe) => {
        if (loaded.length) {
            console.log(
                `Icon ${iconsRes} have been loaded and is ready to be renderered.`
            );
            return;
        }

        if (missing.length) {
            console.log(`Icon ${iconsRes} does not exist.`);
            return;
        }

        if (pending.length) {
            console.log('pending')
            // Pending icons list in this example is empty.
            // If you call loadIcons() with multiple icons, pending list might not be empty, but for one icon it is always empty.
            //
            // Callback is called when something changes, with 1 icon there can only be 2 type of changes: icon has loaded or icon is missing.
        }
        
    });
    onMount(() => ready = true);
    let unique = {}
    console.log(profile)
</script>

{#if ready}
    <header transition:fade>
        <a
        href={data.profile.social_link}
        target="_blank"
        rel="noreferrer"
        >
        <img
            src="{data.publicUrl}/assets/{data.profile.profile_image}"
            alt={data.profile.username}
            in:fly="{{ y: -100, duration: 1000 }}" />
        <h1 in:fly="{{ y: 100, duration: 1100 }}">{data.profile.username}</h1>
        <p in:fly="{{ y: 200, duration: 1350 }}">{data.profile.description}</p>
        </a>
    </header>

    <!-- <h2>Links</h2>
    -->

    <section>
        <ul>
            {#each links as link, i}
                <a href={link.href} target="_blank" rel="noreferrer" in:fly="{{ y: 200, duration: 1000, delay: 50 * i }}">
                <li style="background: linear-gradient(to right, {link.left}, {link.right})" >
                <div class="icon" in:fly="{{ y: 20, duration: 1300 }}"><Icon icon={link.icon} style="color: white"  /></div>
                </li>
                <h2 in:fly="{{ y: 100, duration: 1200 }}">{link.Title}</h2>
                <div class="sub" in:fly="{{ y: 100, duration: 1300 }}"><span class="subtitle">{link.subtitle}</span></div>

            </a>
        {/each}
        </ul>
    </section>

    <p class="codeby">made with <a href="https://github.com/ayamkv/frec-reloaded"><b>Raharja</b></a> </p>
    <p class="codebyp">by @raaharja</p>
{/if}

{#if !ready}
<div class="loader" style="margin-top: 6em; text-align:center" out:fade>
    <h1 style="font-size: 3em;">⌛😶</h1>
    <h2 style="margin-top: 0.25em;" out:fade>mohon bersabar </h2>
</div>

{/if}

<style>
@keyframes fadeDelay {
  0% {
    transform: opacity(0);
  }
  100% {
    transform: opacity(0.2);
  }
}

.loader {  
  opacity: 0;
  animation: 1s ease-out 0.2s 1 fadeDelay;
}

    .codeby {
        margin: 8em 1em 0em 0em;
        text-align: center;
        font-weight: 500;
        line-height: 0;
        transition: all 0.2s ease-in-out;
    }
    .codebyp {
        font-size: 0.75em;
        margin-bottom: 2em;
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
        transition: all 0.2s ease-in-out;
    }

    section {
        
        margin-top: 1em;
        transform: translateX(-4.75%);
    }
    ul {
        list-style-type: none;
    }

    section ul {
        margin-top: 2rem;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
    }

    section ul h2 {
        font-size: 120%;
        color: #ffffff;
        margin-top: 10px;
        font-weight: 600;
        margin-bottom: 0px;    
        transition: transform .2s;
        position: relative;

    }

    section ul span {
        font-size: 80%;
        color: #6b6480;
        margin-top: 0px;
        font-weight: 500;

        transition: transform .5s;
        position: relative;
    }
    section ul span:hover{
        color: #947edf;
    }

    section ul h2:hover, a:hover{
        transform: scale(1.05);
    }

    section ul li:hover {
        outline: 1px solid #292936;
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
    span {
        line-height: 1em;
    }

    section ul li {
        width: 11.25rem;
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
