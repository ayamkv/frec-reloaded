<script>
    
    import Icon from '@iconify/svelte';
    import Typewriter from 'svelte-typewriter';
    import { loadIcons } from '@iconify/svelte';
    import { onMount } from 'svelte';
    import { fade, fly, blur } from 'svelte/transition';
    import { backOut } from 'svelte/easing';
    export let data;
    const { links, profile } = data;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let interval = null;
    
    // const { profile } = data;
    let ready = false;

    const iconsRes = data.links.map(item => item.icon);
    const colorRes = data.links.map(item => item.left);

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
    onMount(() => {
        ready = true;
		console.log('the component has mounted');
	});
    let unique = {}

    console.log(colorRes)
    
</script>
<svelte:head>
    <title>Statistics | {data.profile.username}</title>
</svelte:head>

{#if ready}
    <header transition:fade>
        <a
        href="/"
        target="_blank"
        rel="noreferrer"
        onclick="return false" ondblclick="location=this.href"
        >
        <img
            src="{data.publicUrl}/assets/{data.profile.profile_image}"
            alt={data.profile.username}
            in:fly="{{ y: -100, duration: 500 }}" />
            <h1 in:fly="{{ y: 100, duration: 500 }}">Statistics</h1>

        <Typewriter delay=200>
            <p in:fly="{{ y: 200, duration: 550 }}" data-value="{data.profile.username}" on:mouseenter={() => {
                console.log('hover');
            }}>{data.profile.username}</p>
        </Typewriter>    
  
        </a>
    </header>

    <!-- <h2>Links</h2>
    -->

    <section>
        <ul>
            {#each links as link, i}
            
                <a href='{link.href}' target="_blank" rel="noreferrer" in:fly="{{ y: 200, duration: 1000, delay: 50 * i, easing:backOut }}" onclick="return false" ondblclick="location=this.href">
                <li style="background: linear-gradient(to right, {link.left}, {link.right});" >
                   
                    <span class="new"><Icon icon="lucide:mouse-pointer-click" style="color: black; transform:translateY(2px) translateX(-2px)" width="20" />{link.clicks}</span>
                <div class="icon" in:fly="{{ y: 20, duration: 1300 }}"><Icon icon={link.icon} style="color: white" width="40" /></div>
                  
                </li>
                <li class="blurBackground" style="background: linear-gradient(to right, {link.left}, {link.right}); filter: blur(10px); transform: translateY(-4em); z-index: -1; opacity:0.15; position:absolute;" ></li>
                <h2 in:fly="{{ y: 100, duration: 1200 }}">{link.Title}</h2>
                <div class="sub" in:fly="{{ y: 100, duration: 1300 }}">
                <span class="subtitle">{link.subtitle}</span>
                </div>

                    



            </a>
        {/each}
        
        </ul>

    </section>

    <p class="codeby"><a href="/"><b>Raharja</b></a>'s links 😱</p>
    <p class="codebyp">by @raaharja</p>
{/if}

{#if !ready}
<div id="loader"class="loader" style="margin-top: 6em; text-align:center; animation: 1s ease-in 0s 1 fadeDelay;" transiton:fade>
    <h1 style="font-size: 3em;">⌛😶</h1>
    <h2 style="margin-top: 0.25em;" transition:fade>mohon bersabar </h2>
</div>
{/if}

<style>


.loader {  
  opacity: 0.01;
  animation: 1s linear fadeDelay;
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
        margin-right: 1em;
        text-align: center;
        transition: all 0.2s ease-in-out;
    }

    .codeby a {
        color: #9429ff;
    }

    .codeby:hover, .codebyp:hover {
        transform: scale(1.1);
        color: #8d29ffcf;
    }
    

    header img {
        height: 124px;
        width: 124px;
        border-radius: 50%;
        margin-bottom: 32px;    
        transition: transform .2s, filter 1s;
        position: relative;
    }

    header img:hover {
        transform: scale(1.1);
        filter:hue-rotate(360deg) drop-shadow(0px 0px 40px #6200ff);

    }
    header h1 {
        margin-bottom: 0;
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
        gap: 2rem;
    }

    section ul a {
        transition: filter .5s ease-in-out, transform .3s linear;
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

        transition: all .5s;
        position: relative;
    }

    section ul span:hover{
        color: #947edf;
    }

    section ul h2:hover{
        color: #947edf;
        transform: scale(1.03);
    }
    
    section ul a:hover {
        filter: hue-rotate(-25deg) saturate(1.5);
        transform: scale(1.02);
    }

    section ul li:hover {
        height: 6.5em;
        outline: 1.2px solid #71719675;
        
    }

    section ul li {
          width: 20rem;
          height: 4rem;
          max-width: 40rem;
          min-height: 10px;
        border-radius: 0.7rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: relative;
        
        transition: transform .1s, outline .1s ease, height 250ms ease;
    }




    style ul li .blurBackground {
        
        z-index: -1;
        
    }

    section ul li :global(svg) {    
        /* filter: drop-shadow(0px 5px 10px rgba(255, 255, 255, 0.636)); */
        font-size: 14em;
        /* width: 40px;
        height: 40px;
        max-width: 40px;
        min-height: 50px; */
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
        background: linear-gradient(30deg, rgba(215, 227, 255, 0.52) 0%, rgba(255, 255, 255, 0.92) 100%);
        z-index: 1;
        padding: .2rem 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: black;
        filter: drop-shadow(0px 0px 20px black);
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
        max-width: 15rem;
        height: 90px;
        margin-bottom: 0.2em;
    }

    section ul {
        gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
    }
}

  @media screen and (max-width: 1125px) {
    section ul {
        gap: 1rem;
        grid-template-columns: repeat(2, 2fr);
    }
}   

@media screen and (max-width: 535px) { 
    span {
        line-height: 1em;
    }

    section ul li {
        width: 10rem;
        max-width: 40rem;
        height: 70px;
    }

    section ul {
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }

    section ul span {
        font-size: 90%;
    }

    span.new {
        
        top: -0.4rem;
        right: 0.7rem;
        font-size: 0.8rem;
        padding-top: 0;
        height: 2em;
    }
    .codeby{
        font-size: 14px;
    }
    .codebyp{
        font-size: 10px;
    }
}



</style>
