<script>
    import 'iconify-icon';
    import { onMount } from 'svelte';
    import { fade, fly} from 'svelte/transition';
    import { backOut } from 'svelte/easing';

    // export let data;
    // const { links, profile } = data;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let interval = null;
    // const { profile } = data;
    let ready = false;

    // const iconsRes = data.links.map(item => item.icon);
    // const colorRes = data.links.map(item => item.left);

    // loadIcons(iconsRes, (loaded, missing, pending, unsubscribe) => {
    //     if (loaded.length) {
    //         console.log(
    //             `Icon ${iconsRes} have been loaded and is ready to be renderered.`
    //         );
    //         return;
    //     }

    //     if (missing.length) {
    //         console.log(`Icon ${iconsRes} does not exist.`);
    //         return;
    //     }

    //     if (pending.length) {
    //         console.log('pending')
    //         // Pending icons list in this example is empty.
    //         // If you call loadIcons() with multiple icons, pending list might not be empty, but for one icon it is always empty.
    //         //
    //         // Callback is called when something changes, with 1 icon there can only be 2 type of changes: icon has loaded or icon is missing.
    //     }
        
    // });
    function typewriter(node, { speed = 3 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);
		return {
			duration,
			tick: t => {
                
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	};
    async function addClick(event) {
        console.log('add click' + event)
    }

    function onHover(event) {
        let iteration = 0;
        console.log('hover!')
        clearInterval(interval);
        
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                return event.target.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
            }
            
            iteration += 1 / 2;
        }, 30);

    }
    function onHover2(event) {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        let iteration = 0;
        console.log('hover!')
        clearInterval(interval);
        
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                return event.target.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
            }
            
            iteration += 0;
        }, 30);

    }
    
    // let opacity = 0
    // function increment() {
    //     let opacity = i++; // increment
    //     console.log(opacity)
    // }
    // if (ready) {
    //     setInterval(increment, 1000);
    // } else {
    //     console.log(opacity)
    // };

    onMount(() => {
        ready = true;
		console.log('the component has mounted');
	});
    let unique = {}

    // console.log(colorRes)
    
</script>
<svelte:head>
    <title>Maintenance | 🌵</title>
</svelte:head>

{#if ready}
    <!-- <header transition:fade>
        <a
        href={data.profile.social_link}
        target="_blank"
        rel="noreferrer"
        onclick="return false" ondblclick="location=this.href"
        >
        <img class="clickme" src="/images/clickme.png"/>
        <img
            src="{data.publicUrl}/assets/{data.profile.profile_image}"
            alt={data.profile.username}
            in:fly="{{ y: -100, duration: 1000 }}" class="profile_image" />
        <h1 in:fly="{{ y: 100, duration: 1000 }}" data-value={data.profile.username} on:mouseover={onHover} class="user">{data.profile.username}</h1>

        <div in:fly="{{ y:120, duration: 1000 }}">
            <p transition:typewriter style="margin-top: 20px;" on:mouseover={onHover2} data-value={data.profile.description}>{data.profile.description}</p>

    </div>
  
        </a>
    </header> -->
    <header in:fly="{{ y: 100, duration: 1000 }}">
        <h1 class="user">on maintenance :)</h1>
        <p>pindah database baru</p>
        
        <p style="margin-top: 20px;"> in the meantime check myyy <a style="display: inline; color:#fff000" href="https://open.spotify.com/user/alm4b0oqld8z09rgtgcnzdhng?si=WeNIA_Z8R1OrPmJzo4HSOQ">spotify</a></p>
    </header>

    
   
    <section>
        <ul>

                
                <a href=about:blank target="_blank" rel="noreferrer" in:fly="{{ y: 200, duration: 1000, delay: 80, easing:backOut }}">
                <li style="background: linear-gradient(to right, #fff000, #fff777)" >
                <div class="icon" in:fly="{{ y: 20, duration: 1300 }}"> <iconify-icon icon="fluent-emoji:camel" width="70" height="70"></iconify-icon></div>
                </li>
                <li class="blurBackground" style="background: linear-gradient(to right, #fff000, #fff777); filter: blur(40px); transform: translateY(-6em); z-index: -1; opacity:0.35; position:absolute;" ></li>
                <h2 in:fly="{{ y: 100, duration: 500 }}">Booka</h2>
                <div class="sub" in:fly="{{ y: 50, duration: 700 }}"><p class="subtitle">Waktu Maghrib dan Imsyak seluruh Indonesia<p></div>
              
            

            </a>
        

        
        </ul>

    </section>
    <!-- <section>
        <ul>
            {#each links as link, i}
                
                <a href={link.href} target="_blank" rel="noreferrer" in:fly="{{ y: 200, duration: 1000, delay: 80 * i, easing:backOut }}" on:click={() => {updateClick(link.id); console.log('button clicked ' + link.id)} }>
                <li style="background: linear-gradient(to right, {link.left}, {link.right})" >
                <div class="icon" in:fly="{{ y: 20, duration: 1300 }}"><Icon icon={link.icon} style="color: white"  /></div>
    
                </li>
                <li class="blurBackground" style="background: linear-gradient(to right, {link.left}, {link.right}); filter: blur(40px); transform: translateY(-6em); z-index: -1; opacity:0.35; position:absolute;" ></li>
                <h2 in:fly="{{ y: 100, duration: 500 }}" on:mouseenter={onHover} data-value={link.Title}>{link.Title}</h2>
                <div class="sub" in:fly="{{ y: 50, duration: 700 }}"><p class="subtitle">{link.subtitle}<p></div>
            

            </a>
        
        
        {/each}
        
        </ul>

    </section> -->
<div class="footer" in:fade="{{ delay:400, duration:1000}}">
    <p class="codeby"><a href="https://github.com/ayamkv/frec-reloaded"><b>Raharja</b></a>'s links 😱</p>
    <p class="codebyp">by @raaharja</p>
</div>

{/if}

{#if !ready}
<div id="loader"class="loader" style="margin-top: 6em; text-align:center; animation: 1s ease-in 0s 1 fadeDelay;" transiton:fade>
    <h1 style="font-size: 3em;">⌛😶</h1>
    <h2 style="margin-top: 0.25em;" transition:fade>mohon bersabar </h2>
</div>
{/if}

<style>


.loader {  
  opacity: 0.02;
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
    
    @keyframes clickpop {
      0% {
      transform: rotate(0deg);
       opacity: 0;
       top: 0px;
       right: 58px;
      }
      50% {
      transform: rotate(25deg);
      opacity:1;
        top: 40px;
        right: 10%;
        
      }
      85% {
        transform: rotate(-5deg);
        opacity:1;
        right: 8%;
        top: 90px;
      }
      100% {
        transform: rotate(-10deg);
        right: 30px;
        opacity: 0;
        top: 125px;
      }
    }
    
    @keyframes clickpop2 {
      0% {
      transform: rotate(0deg);
       opacity: 0;
       top: 0px;
       right: 20%;
      }
      50% {
      transform: rotate(25deg);
      opacity:1;
        top: 40px;
        right: 25%;
        
      }
      85% {
        transform: rotate(-5deg);
        opacity:1;
        right: 10%;
        top: 15%;
      }
      100% {
        transform: rotate(-10deg);
        right: 30px;
        opacity: 0;
        top: 125px;
      }
    }    
    

    header img {
        height: 124px;
        width: 124px;
        
        margin-bottom: 10px;    
        transition: transform .2s, filter 1s;
        position: relative;
    }
    
    img.profile_image:not(.clickthumb) {
      z-index: 1;
      position: relative;
      border-radius: 50%;
    }
    
    img.clickme {
    transition: all 1s;
     pointer-events: none;
     opacity:0;
     z-index: 2;
     top: 80px;
     right: 58px;
     position: absolute;
     animation-name: clickpop2;
     animation-duration: 3.5s;
     animation-delay: 1s;
     animation-iteration-count: forwards;
    }
    
    

    header img.profile_image:hover {
        transform: scale(1.1);
        filter:hue-rotate(720deg) drop-shadow(0px 0px 40px #6a00ff61);

    }
    
    
    
    header h1 {
        margin-bottom: 0;
        padding: 0 10px;
        border-radius: 0.4em;
        transition: all 0.1s linear;
    }
    header p {
        line-height: 0;
        font-size: 120%;
        color: #c5c2da;
        margin-bottom: 0.25em;
    }


    header h1:hover {
        transform: scale(1.1);
        color: #17171C;
        background: #ffffff;

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
        transition: filter .7s ease-in-out, transform .3s linear;
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

    section ul span, section ul p {
        font-size: 80%;
        color: #6b6480;
        margin-top: 0px;
        font-weight: 500;

        transition: all .5s;
        position: relative;
    }

    section ul span:hover, section ul p:hover{
        color: #947edf;
    }

    section ul h2:hover{
        color: #947edf;
        transform: scale(1.03);
    }
    
    section ul a:hover {
        filter: hue-rotate(-40deg) saturate(1.3);
        transform: scale(1.02);
    }

    section ul li:hover {
        height: 6.5em;
        outline: 1.2px solid #71719675;
        
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
        transition: transform .1s, outline .1s ease, height 250ms ease;
    }

    style ul li .blurBackground {
        
        z-index: -1;
        
    }

    section ul li :global(svg) {    
        /* filter: drop-shadow(0px 5px 10px rgba(255, 255, 255, 0.636)); */
        font-size: 14em;
        width: 40px;
        height: 40px;
        max-width: 40px;
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
  img.clickme {
     animation-name: clickpop;
     animation-duration: 3.5s;
     animation-delay: 1s;
     animation-iteration-count: forwards;
    }
    
  
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
        height: 80px;
    }

    section ul {
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }

    section ul span {
        font-size: 90%;
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
