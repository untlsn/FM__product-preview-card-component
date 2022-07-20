import image from '~/assets/images/image-product-desktop.jpg';

function Home() {
  return (
    <main class="grid place-content-center min-h-screen bg-[#F2E9E2]">
      <article class="flex sm:h-140 w-180 max-(w-90vw h-90vh sm:flex-col) rounded-xl overflow-hidden font-mono text-[#747685] bg-white">
        <img class="flex-1 max-sm:h-1/2 sm:w-0" src={image} alt="product" />
        <div class="flex flex-col p-8 gap-2 sm:gap-8 flex-1">
          <h2 class="text-xl uppercase">
            perfume
          </h2>
          <h1 class="font-fraunces text-3xl sm:text-4xl text-black">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p class="text-sm flex-1">
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
          <div class="flex gap-6 items-center">
            <h3 class="font-fraunces text-[#43826A] text-4xl">
              $149.99
            </h3>
            <p>
              <s>$169.99</s>
            </p>
          </div>
          <button type="button" class="rounded-lg w-full bg-[#43826A] hover:bg-[#1A4031] transition-colors text-white py-4 font-bold">
            <i class="i-custom-cart m-(t1 r3)" />
            Add to Cart
          </button>
        </div>
      </article>
    </main>
  );
}

export default Home;
