import { useEffect, useRef, useState, type ReactNode } from "react";

const assets = {
  heroBg: "https://www.figma.com/api/mcp/asset/69cfca8c-8863-48da-a369-74535c71b2af",
  woman: "/hero-woman.png",
  heroSet: "https://www.figma.com/api/mcp/asset/320201c6-a968-4fb8-8cfc-02aae958a421",
  farmPattern: "https://www.figma.com/api/mcp/asset/fe8468f4-e4a2-4410-8a14-250e58d81cad",
  farmVideo: "/farm-story.mp4",
  ctaPattern: "https://www.figma.com/api/mcp/asset/384ed38b-41e7-4663-82a7-198ff8385ccd",
  ctaWoman: "/cta-woman.png",
  ctaWomanAlt: "/cta-woman-alt.png",
  farm: "https://www.figma.com/api/mcp/asset/b8f10c86-90d4-479d-8e6e-52a9701efcda",
  badges: {
    googlePlay: "https://www.figma.com/api/mcp/asset/04e75c1c-4aac-47a7-ba0d-8c357375a75b",
    getItOn: "https://www.figma.com/api/mcp/asset/9b0436fa-878c-4b8f-b7d9-e326ba5dffd6",
    googleLogo: "https://www.figma.com/api/mcp/asset/cab00f3b-735b-4ae4-bc8f-33009f872fa1",
    appStore: "https://www.figma.com/api/mcp/asset/ab4fb336-e8ca-4368-b9e2-4885e351211e",
    downloadOnThe: "https://www.figma.com/api/mcp/asset/f982aa43-67a9-4552-ae35-9145533a9bd0",
    appleLogo: "https://www.figma.com/api/mcp/asset/ac39aa7f-9bd4-48fa-b2e7-a9b94f31f2ff",
  },
  socials: [
    "https://www.figma.com/api/mcp/asset/9f8e290b-2b4a-49be-b1d5-cbad4cf16813",
    "https://www.figma.com/api/mcp/asset/afeb6f68-1ca6-43c4-8d10-a2edf8781d42",
    "https://www.figma.com/api/mcp/asset/07fa26fe-003c-48c3-a096-46772de57d8e",
    "https://www.figma.com/api/mcp/asset/7a04ee2d-3fa9-427d-af71-966d09e20a81",
    "https://www.figma.com/api/mcp/asset/7d7ebccc-e8f4-4a6f-9815-8c49b59d749f",
    "https://www.figma.com/api/mcp/asset/739627b8-3f0f-4446-93f4-6ebae6d44013",
  ],
  feature: [
    "https://www.figma.com/api/mcp/asset/c3a5ab45-c549-4250-a541-dbfb3c44b95c",
    "https://www.figma.com/api/mcp/asset/9ed8de44-64f6-4cdf-8ea3-a2690a6b7d90",
    "https://www.figma.com/api/mcp/asset/1770e8b7-f163-44ee-b139-c203a02a4fa2",
  ],
  categories: [
    "https://www.figma.com/api/mcp/asset/b6c0eded-f0ba-43ec-a16d-0b6c1daa7a4b",
    "https://www.figma.com/api/mcp/asset/0337db22-71fe-4b22-8865-e1a42acaeb46",
    "https://www.figma.com/api/mcp/asset/71ccf19d-b902-4559-aeee-8a2cd55a394d",
    "https://www.figma.com/api/mcp/asset/c02299f2-fbb7-446b-84da-a8a94f606025",
    "https://www.figma.com/api/mcp/asset/ed453458-fbc7-4dbc-907a-38217f36d567",
    "https://www.figma.com/api/mcp/asset/c7d81444-4e30-409f-9a7d-ef04a495a298",
  ],
  products: [
    "https://www.figma.com/api/mcp/asset/ab571d16-6589-437c-9aaa-f8cc8a31981b",
    "https://www.figma.com/api/mcp/asset/67246aa7-c998-4dce-8dc9-531690866b76",
    "https://www.figma.com/api/mcp/asset/e9a6aeef-1376-4f4e-b81a-97d028b9588a",
    "https://www.figma.com/api/mcp/asset/4ca80074-f6f3-429d-9cdf-b5545676d580",
    "https://www.figma.com/api/mcp/asset/7877e7c5-e9e8-4799-961e-4582e4e4abb6",
    "https://www.figma.com/api/mcp/asset/055495dc-91af-42c0-a8ee-2de99f2d6511",
    "https://www.figma.com/api/mcp/asset/04ac45f6-69dd-4e05-a1a0-5a21129b3ce7",
    "https://www.figma.com/api/mcp/asset/14eaa8f9-2b7e-4e18-b6a3-38d8fb8e1921",
    "https://www.figma.com/api/mcp/asset/220b5bc7-0dbc-4b83-bd01-589fc7fe2a28",
    "https://www.figma.com/api/mcp/asset/9734bbd7-9ea4-4e1f-b585-0f061ae96c2f",
    "https://www.figma.com/api/mcp/asset/510848ce-6c12-4d6c-a301-97936e67a02c",
    "https://www.figma.com/api/mcp/asset/99669f24-9a0e-4154-a986-0fa3c196cd40",
    "https://www.figma.com/api/mcp/asset/9c0cff05-54fa-46e1-b113-c9a313074508",
    "https://www.figma.com/api/mcp/asset/208a7d18-87c2-4c87-8931-070a00743d6f",
    "https://www.figma.com/api/mcp/asset/03c03ec7-51f6-4773-89b2-ebb32e04fa6d",
    "https://www.figma.com/api/mcp/asset/90242874-588d-4a0f-a7dc-426389db3417",
    "https://www.figma.com/api/mcp/asset/190fb892-ee7c-4c57-a39e-efa16cfd3f16",
    "https://www.figma.com/api/mcp/asset/6be076bb-86ac-416b-a54c-3710876190b2",
  ],
};

const categoryNames = ["Fresh Milk", "Flavored Milk", "Yogurt", "Ice Cream", "Bakery & Butter", "Alt Milk"];
const menuNames = [
  "100% Pasteurized Milk",
  "100% Natural Yogurt",
  "100% Powdered Milk",
  "100% Pasteurized Milk",
  "100% Pasturized Milk",
  "100% Pasteurized Milk",
];

const smoothMotion = "transition-all duration-900 ease-out [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]";
const buttonMotion = `${smoothMotion} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155eef] active:scale-[0.97]`;
const pillShadow = "shadow-[0_1px_2px_rgba(16,24,40,0.05)]";
const navLinkMotion =
  "inline-flex shrink-0 items-center whitespace-nowrap text-[16px] font-semibold leading-6 text-[#475467] hover:-translate-y-0.5 hover:text-[#155eef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#155eef] active:scale-[0.98]";
const featureMotion =
  "transform-gpu will-change-transform transition-[transform,box-shadow] duration-1000 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]";
const featureInnerMotion =
  "transform-gpu will-change-transform transition-[transform,opacity,height,bottom] duration-1000 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]";
const cardMotion =
  "transform-gpu will-change-transform transition-[transform,box-shadow] duration-900 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]";
const cardInnerMotion =
  "transform-gpu will-change-transform transition-[transform,opacity] duration-900 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]";

function useReplayOnView<T extends HTMLElement>(threshold = 0.45) {
  const ref = useRef<T | null>(null);
  const visibleRef = useRef(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visibleRef.current) {
          setCycle((value) => value + 1);
        }
        visibleRef.current = entry.isIntersecting;
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, cycle };
}

function scrollToTopGentle() {
  const startY = window.scrollY;
  const duration = 1400;
  const startTime = performance.now();

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = easeOutCubic(progress);
    window.scrollTo(0, startY * (1 - eased));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

function Logo() {
  return (
    <div className="font-serif text-[40px] font-semibold leading-[30px] tracking-[-0.04em] text-[#010a1e]">
      FRESH<span className="text-[#155eef]">MILK</span>
    </div>
  );
}

function ArrowButton({ children = ">" }: { children?: ReactNode }) {
  return (
    <button className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0f172a] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#155eef] hover:shadow-lg ${buttonMotion}`}>
      {children === "<" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </button>
  );
}

function USFlagIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 overflow-hidden rounded-full border border-[#d0d5dd]" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#fff" />
      <clipPath id="us-flag-clip">
        <circle cx="10" cy="10" r="10" />
      </clipPath>
      <g clipPath="url(#us-flag-clip)">
        <rect width="20" height="20" fill="#fff" />
        <rect y="0" width="20" height="2" fill="#B91C1C" />
        <rect y="4" width="20" height="2" fill="#B91C1C" />
        <rect y="8" width="20" height="2" fill="#B91C1C" />
        <rect y="12" width="20" height="2" fill="#B91C1C" />
        <rect y="16" width="20" height="2" fill="#B91C1C" />
        <rect width="9" height="10" fill="#1D4ED8" />
      </g>
    </svg>
  );
}

function ChevronSmallDownIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[#344054]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MilkPailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 2.5h6l-.5 1.5h-5L5 2.5Z" fill="#172554" />
      <path d="M4.5 4h7l-.7 8.5A1.2 1.2 0 0 1 9.6 13h-3.2a1.2 1.2 0 0 1-1.2-1.1L4.5 4Z" fill="#172554" />
      <path d="M5.5 5.5h5l-.4 6h-4.2l-.4-6Z" fill="#FDE68A" opacity=".9" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3.75 17a6.25 6.25 0 0 1 12.5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HeadphoneIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 11v-1a6 6 0 0 1 12 0v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 11h2.25v4.25H4.9A1.9 1.9 0 0 1 3 13.35v-.45A1.9 1.9 0 0 1 4.9 11H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M16 11h-2.25v4.25h1.35A1.9 1.9 0 0 0 17 13.35v-.45A1.9 1.9 0 0 0 15.1 11h.9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M13.75 15.25c0 1.1-.9 2-2 2H10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m12.5 5-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m7.5 5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StoreBadge({ store, size = "md" }: { store: "App Store" | "Google Play"; size?: "md" | "lg" }) {
  const large = size === "lg";
  const width = store === "App Store" ? (large ? "w-[132px]" : "w-[135px]") : large ? "w-[148.5px]" : "w-[135px]";
  const height = large ? "h-11" : "h-10";

  return (
    <div className={`relative shrink-0 ${height} ${width} overflow-hidden rounded-[6px] border border-[#a6a6a6] bg-black hover:-translate-y-0.5 hover:shadow-lg ${smoothMotion}`}>
      {store === "App Store" ? (
        <>
          <img src={assets.badges.appleLogo} alt="" className="absolute left-[9px] top-[9px] h-[22px] w-[18px]" />
          <img src={assets.badges.downloadOnThe} alt="" className="absolute left-[35px] top-[8px] h-[7px] w-[69px]" />
          <img src={assets.badges.appStore} alt="App Store" className="absolute left-[33px] top-[18px] h-[16px] w-[75px]" />
        </>
      ) : (
        <>
          <img src={assets.badges.googleLogo} alt="" className="absolute left-[9px] top-[7px] h-[26px] w-[23px]" />
          <img src={assets.badges.getItOn} alt="" className="absolute left-[40px] top-[6px] h-[7px] w-[39px]" />
          <img src={assets.badges.googlePlay} alt="Google Play" className="absolute left-[40px] top-[17px] h-[17px] w-[85px]" />
        </>
      )}
    </div>
  );
}

function ProductCard({ image, title, hero = false, onAddToCart }: { image: string; title: string; hero?: boolean; onAddToCart?: () => void }) {
  const price = hero ? "$39.99" : "$8.00";
  const originalPrice = hero ? "$59.99" : "$10.00";

  return (
    <article
      className={
        hero
          ? `group w-[290px] overflow-hidden rounded-[28px] bg-gradient-to-b from-[#93c5fd] to-white pb-2 shadow-sm hover:-translate-y-0.5 hover:shadow-2xl ${cardMotion}`
          : `group h-[334px] overflow-hidden rounded-[20px] bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-xl ${cardMotion}`
      }
    >
      <div className={hero ? "p-3 pb-0" : "p-2 pb-0"}>
        <div className={hero ? "grid h-[200px] place-items-center overflow-hidden rounded-[20px]" : "grid h-[200px] place-items-center rounded-[16px] bg-[#f8fafc]"}>
          <img
            src={image}
            alt=""
            className={hero ? `h-full w-full object-contain group-hover:scale-[1.02] ${cardInnerMotion}` : `max-h-[88%] max-w-[88%] object-contain group-hover:scale-[1.03] ${cardInnerMotion}`}
          />
        </div>
      </div>
      <div className={hero ? "px-4 pb-4 pt-3" : "px-4 py-3"}>
        <h3 className={hero ? "text-[20px] font-semibold leading-7 text-[#0f172a]" : "text-[14px] font-semibold leading-5 text-[#101828]"}>{title}</h3>
        <div className={hero ? "mt-2 flex items-center justify-between text-[16px] leading-6" : "mt-2 flex items-center justify-between text-[14px] leading-6"}>
          <span className="font-semibold text-[#101828]">{price}</span>
          <span className="text-[#98a2b3] line-through">{originalPrice}</span>
        </div>
        {!hero && (
          <button
            onClick={onAddToCart}
            className={`mt-3 h-8 w-full rounded-full border border-[#e4e7ec] text-[12px] font-semibold text-[#344054] hover:border-[#155eef] hover:bg-[#eff8ff] hover:text-[#155eef] ${cardMotion} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155eef] active:scale-[0.98]`}
          >
            + Add to cart
          </button>
        )}
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pt-2 pb-5 lg:px-20">
      <div className="mb-3 flex h-10 items-center justify-between">
        <h2 className="text-[32px] font-semibold leading-10 tracking-[-0.02em] text-[#101828]">{title}</h2>
        <div className="flex gap-2">
          <ArrowButton>{"<"}</ArrowButton>
          <ArrowButton>{">"}</ArrowButton>
        </div>
      </div>
      {children}
    </section>
  );
}

function CategoryCard({ image, label }: { image: string; label: string }) {
  const gradientMap: Record<string, string> = {
    "Fresh Milk": "bg-gradient-to-b from-[#93C5FD] to-[#EFF6FF]",
    "Flavored Milk": "bg-gradient-to-b from-[#F9A8D4] to-[#FDF2F8]",
    Yogurt: "bg-gradient-to-b from-[#D8B4FE] to-[#FAF5FF]",
    "Ice Cream": "bg-gradient-to-b from-[#67E8F9] to-[#ECFEFF]",
    "Bakery & Butter": "bg-gradient-to-b from-[#FDE047] to-[#FEFCE8]",
    "Alt Milk": "bg-gradient-to-b from-[#86EFAC] to-[#F0FDF4]",
  };

  return (
    <article className={`group h-[236px] rounded-[16px] p-4 text-center shadow-sm hover:-translate-y-0.5 hover:shadow-xl ${cardMotion} ${gradientMap[label] ?? "bg-gradient-to-b from-[#93C5FD] to-[#EFF6FF]"}`}>
      <div className="grid h-[150px] place-items-center rounded-[16px] bg-transparent">
        <img src={image} alt="" className={`max-h-[132px] object-contain group-hover:scale-[1.03] ${cardInnerMotion}`} />
      </div>
      <h3 className={`mt-4 text-[14px] font-semibold leading-5 text-[#101828] group-hover:text-[#155eef] ${cardInnerMotion}`}>{label}</h3>
    </article>
  );
}

function ProductGrid({ offset = 0, onAddToCart }: { offset?: number; onAddToCart: () => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
      {menuNames.map((name, index) => (
        <ProductCard key={`${name}-${offset}-${index}`} image={assets.products[(index + offset) % assets.products.length]} title={name} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

function Cta({ variant = "green" }: { variant?: "green" | "cream" }) {
  const cream = variant === "cream";
  const { ref: ctaRef, cycle: ctaCycle } = useReplayOnView<HTMLElement>();

  return (
    <section ref={ctaRef} className="bg-[#f1f5f9] px-5 py-5 lg:px-20">
      <div
        className={[
          "relative mx-auto flex min-h-[440px] max-w-[1280px] items-center overflow-hidden rounded-[32px] px-6 py-16 lg:px-16",
          cream ? "bg-gradient-to-br from-[#f5d19b] to-[#fbedd9]" : "bg-gradient-to-br from-[#a3e635] to-[#d9f99d]",
        ].join(" ")}
      >
        <img src={assets.ctaPattern} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="relative z-10 w-full max-w-[680px]">
          {!cream && (
            <div
              key={`cta-badge-${ctaCycle}`}
              className="mb-4 flex items-center gap-3 text-[14px] leading-5 text-[#475569]"
              style={{ animation: "hero-fade-up 1500ms cubic-bezier(0.16,1,0.3,1) 180ms both" }}
            >
              <div className="flex -space-x-[6px]">
                {assets.products.slice(0, 5).map((src) => (
                  <img key={src} src={src} alt="" className="h-10 w-10 rounded-full border-2 border-white bg-white object-cover" />
                ))}
              </div>
              <span className="max-w-[190px]">
                <b className="font-semibold text-[#0f172a]">10+millions</b> users use our product worldwide
              </span>
            </div>
          )}
          <h2
            key={`cta-title-${ctaCycle}`}
            className="text-[42px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#101828] lg:text-[48px] lg:leading-[60px]"
            style={{ animation: "hero-fade-up 1800ms cubic-bezier(0.16,1,0.3,1) 420ms both" }}
          >
            {cream ? (
              <>
                Ready for
                <br />
                Real Milk Freshness?
              </>
            ) : (
              <>Subscribe to "Milk Pinto" Delivered every morning</>
            )}
          </h2>
          <p
            key={`cta-copy-${ctaCycle}`}
            className="mt-4 max-w-[620px] text-[20px] leading-[30px] text-[#475467]"
            style={{ animation: "hero-fade-up 1800ms cubic-bezier(0.16,1,0.3,1) 720ms both" }}
          >
            {cream
              ? "Order homemade milk, yogurt, and fresh bakery delivered to your door every morning. Download the app today."
              : "Never worry about running out of milk. Subscribe to a monthly package today, get a 15% discount and free delivery."}
          </p>
          <div
            key={`cta-actions-${ctaCycle}`}
            className="mt-6 flex flex-wrap gap-3"
            style={{ animation: "hero-fade-up 1800ms cubic-bezier(0.16,1,0.3,1) 980ms both" }}
          >
            {cream ? (
              <>
                <StoreBadge store="App Store" size="lg" />
                <StoreBadge store="Google Play" size="lg" />
              </>
            ) : (
              <button className={`flex h-[60px] items-center gap-3 rounded-full bg-[#0f172a] pl-6 pr-3 text-[16px] font-semibold text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#155eef] hover:shadow-xl ${buttonMotion}`}>
                View Packages
                <span className={`grid h-9 w-9 place-items-center rounded-full bg-white text-[#0f172a] ${smoothMotion}`}>
                  <ChevronRightIcon />
                </span>
              </button>
            )}
          </div>
        </div>
        <img
          key={`cta-image-${ctaCycle}`}
          src={cream ? assets.ctaWomanAlt : assets.ctaWoman}
          alt=""
          className="absolute bottom-0 right-0 hidden h-[430px] w-[519px] object-contain object-bottom lg:block"
          style={{ animation: "cta-image-slide 2200ms cubic-bezier(0.16,1,0.3,1) 780ms both" }}
        />
      </div>
    </section>
  );
}

function FeatureCards() {
  const cards = [
    ["New Customer?", "Get 1 Free Milk On your first order", "bg-[#2f80ed]", "Sign up today to claim"],
    ["Free Delivery", "On orders over 300 THB", "bg-[#f04438]", "Stock up milk for your family"],
    ["Fresh Milk", "Milked every morning Deliciously refreshing", "bg-[#875bf7]", "How do you create compelling"],
  ];

  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 px-5 py-5 md:grid-cols-3 lg:px-20">
      {cards.map(([kicker, title, color, hoverText], index) => (
        <article key={title} className={`group relative h-[474px] overflow-hidden rounded-[24px] ${color} p-8 text-white hover:-translate-y-0.5 hover:shadow-2xl ${featureMotion}`}>
          <p className="text-[16px] font-semibold leading-6">{kicker}</p>
          <h3 className="mt-2 max-w-[280px] text-[32px] font-semibold leading-10 tracking-[-0.02em]">{title}</h3>
          <img
            src={assets.feature[index]}
            alt=""
            className={`absolute bottom-0 left-1/2 h-[280px] -translate-x-1/2 object-contain ${featureInnerMotion} group-hover:bottom-12 group-hover:h-[230px] group-hover:scale-[1.01]`}
          />
          <div
            className={`pointer-events-none absolute inset-x-8 bottom-7 flex items-end justify-between gap-4 opacity-0 translate-y-3 ${featureInnerMotion} group-hover:translate-y-0 group-hover:opacity-100`}
          >
            <div className="max-w-[230px] text-[13px] font-semibold leading-5 text-white">{hoverText}</div>
            <div className={`shrink-0 opacity-0 ${featureInnerMotion} group-hover:opacity-100`}>
              <ArrowButton />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function FarmStory() {
  const { ref: farmRef, cycle: farmCycle } = useReplayOnView<HTMLElement>();

  return (
    <section ref={farmRef} className="mx-auto flex max-w-[1440px] justify-center px-5 py-5 lg:h-[448px] lg:px-20">
      <div className="relative grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 overflow-hidden rounded-[24px] bg-white px-6 py-8 md:grid-cols-2 lg:h-[408px] lg:grid-cols-[minmax(0,1fr)_minmax(0,588px)] lg:gap-10 lg:py-6 lg:pl-10 lg:pr-6">
        <img src={assets.farmPattern} alt="" className="absolute inset-0 h-full w-full rounded-[24px] object-cover opacity-5" />
        <div className="relative z-10 max-w-[560px] pt-0 lg:pt-5">
          <div
            key={`farm-badge-${farmCycle}`}
            className="inline-flex items-center rounded-full border border-[#b2ddff] bg-[#eff8ff] p-1 pr-[10px] text-[12px] font-medium leading-[18px] text-[#175cd3]"
            style={{ animation: "hero-fade-up 1500ms cubic-bezier(0.16,1,0.3,1) 120ms both" }}
          >
            <span className="rounded-full border border-[#b2ddff] bg-white px-2 py-0.5">FRESHMILK</span>
            <span className="ml-2">Our Farm</span>
          </div>
          <h2
            key={`farm-title-${farmCycle}`}
            className="mt-5 text-[30px] font-semibold leading-[38px] text-[#101828]"
            style={{ animation: "hero-fade-up 1700ms cubic-bezier(0.16,1,0.3,1) 420ms both" }}
          >
            Our Farm Story
          </h2>
          <p
            key={`farm-copy-${farmCycle}`}
            className="mt-4 text-[18px] leading-7 text-[#475467]"
            style={{ animation: "hero-fade-up 1700ms cubic-bezier(0.16,1,0.3,1) 720ms both" }}
          >
            We started as a small dairy farm with a mission to deliver the freshest and highest quality milk to every family. Our cows are raised in open organic pastures, producing rich, nutritious milk.
          </p>
        </div>
        <video
          className="relative z-10 h-[280px] w-full max-w-[564px] overflow-clip rounded-[16px] object-cover object-center md:h-[360px] lg:justify-self-end"
          autoPlay
          loop
          muted
          playsInline
          poster={assets.farm}
          aria-label="Our Farm Story"
        >
          <source src={assets.farmVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

function PressMentions() {
  const dairyBrands = ["DairyPure", "Organic Valley", "Horizon Organic", "Anchor Dairy", "Arla Foods"];
  const loopBrands = [...dairyBrands, ...dairyBrands];

  return (
    <section className="py-5">
        <div className="mx-auto h-10 max-w-[1280px] overflow-hidden px-5 lg:px-0">
        <div className="flex w-max animate-[logo-cloud-scroll_36s_linear_infinite] items-center gap-16 pr-16 font-serif text-[22px] font-semibold leading-10 text-[#101828]">
          {loopBrands.map((brand, index) => (
            <span key={`${brand}-${index}`} className={index % dairyBrands.length === 0 || index % dairyBrands.length === dairyBrands.length - 1 ? "font-serif" : undefined}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterColumn({
  title,
  links,
  onLinkClick,
}: {
  title: string;
  links: string[];
  onLinkClick?: (link: string) => void;
}) {
  return (
    <div className="w-[120px]">
      <h3 className="text-[14px] font-semibold leading-5 text-[#667085]">{title}</h3>
      <div className="mt-4 flex flex-col gap-3 text-[16px] font-semibold leading-6 text-[#475467]">
        {links.map((link) => (
          <button
            key={link}
            type="button"
            onClick={onLinkClick ? () => onLinkClick(link) : undefined}
            className={`w-fit text-left hover:translate-x-1 hover:text-[#155eef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#155eef] ${buttonMotion}`}
          >
            {link}
          </button>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const socialIcons = [assets.socials[0], assets.socials[1], assets.socials[3], assets.socials[5]];

  return (
    <footer className="bg-white px-5 pt-16 pb-8 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-12 lg:h-[240px] lg:flex-row">
        <div className="max-w-[320px]">
          <button type="button" onClick={scrollToTopGentle} aria-label="Scroll to top" className="shrink-0">
            <Logo />
          </button>
          <p className="mt-8 text-[16px] leading-6 text-[#475467]">
            Start your day with premium milk from our farm. Freshness delivered to your door every morning.
          </p>
          <div className="mt-8 flex gap-6">
            {socialIcons.map((src) => (
              <img key={src} src={src} alt="" className="h-6 w-6 object-contain" />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-10 lg:min-w-[640px] lg:justify-end">
          <FooterColumn
            title="Main Pages"
            links={["Home", "Order", "Our Farm", "Tutorials", "Pricing", "Releases"]}
            onLinkClick={(link) => {
              if (link === "Home") scrollToTopGentle();
            }}
          />
          <FooterColumn title="Products" links={["Fresh Milk", "Flavored Milk", "Yogurt", "Ice Cream", "Bakery & Butter", "Alt Milk"]} />
          <FooterColumn title="Help" links={["Help Center", "Delivery", "Policy", "FAQs"]} />
          <div className="w-[135px]">
            <h3 className="text-[14px] font-semibold leading-5 text-[#667085]">Stay up to date</h3>
            <div className="mt-4 flex flex-col gap-4">
              <StoreBadge store="App Store" />
              <StoreBadge store="Google Play" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-[#e4e7ec] pt-8 text-[16px] leading-6 text-[#667085]">
        <p>© 2026 DailyMilk. All rights reserved.</p>
        <div className="flex gap-4">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}

export default function FreshmilkPage() {
  const [cartCount, setCartCount] = useState(4);
  const [showHeadbar, setShowHeadbar] = useState(true);
  const { ref: heroRef, cycle: heroCycle } = useReplayOnView<HTMLElement>();
  const addToCart = () => setCartCount((count) => count + 1);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;

      setShowHeadbar(currentScrollY < 24 || scrollingUp);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#f1f5f9] font-['Inter',sans-serif] text-[#101828]">
      <style>{`
        @keyframes logo-cloud-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes hero-title-rise {
          0% { opacity: 0; transform: translate(-50%, 96px) scale(0.97); }
          100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
        @keyframes hero-fade-up {
          0% { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-card-slide {
          0% { opacity: 0; transform: translateX(88px) scale(0.97); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes cta-image-slide {
          0% { opacity: 0; transform: translateX(96px) translateY(16px) scale(0.97); }
          100% { opacity: 1; transform: translateX(0) translateY(0) scale(1); }
        }
      `}</style>
      <div
        className={`sticky top-0 z-50 ${smoothMotion} ${
          showHeadbar ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
      <header className="bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 lg:px-0">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <button className={`flex h-10 items-center gap-2 rounded-full border border-[#d0d5dd] bg-white px-[10px] text-[14px] font-semibold leading-5 text-[#344054] hover:border-[#b2ddff] hover:text-[#155eef] ${pillShadow} ${buttonMotion}`}>
              <USFlagIcon />
              <span>EN</span>
              <ChevronSmallDownIcon />
            </button>
            <label className={`hidden h-11 w-80 items-center gap-[10px] rounded-full border border-[#d0d5dd] bg-white px-[10px] text-[#667085] hover:border-[#b2ddff] focus-within:border-[#155eef] focus-within:ring-4 focus-within:ring-[#eff8ff] md:flex ${pillShadow} ${smoothMotion}`}>
              <span className="relative h-5 w-5 shrink-0 rounded-full border-2 border-[#667085] after:absolute after:-bottom-0.5 after:-right-1 after:h-2 after:w-0.5 after:rotate-[-45deg] after:rounded-full after:bg-[#667085]" />
              <input className="h-full w-full bg-transparent text-[16px] leading-6 text-[#667085] outline-none placeholder:text-[#667085]" placeholder="Search Milk, Yogurt,Bakery..." />
            </label>
          </div>
          <button type="button" onClick={scrollToTopGentle} aria-label="Scroll to top" className="shrink-0">
            <Logo />
          </button>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
            <div className="hidden items-center gap-1 lg:flex">
              <button className={`flex h-11 items-center gap-1 rounded-full bg-white px-3 text-[14px] font-semibold leading-5 text-[#344054] hover:bg-[#f8fafc] hover:text-[#155eef] ${buttonMotion}`}>
                <span aria-hidden="true">♡</span>
                Favorites
              </button>
              <button className={`flex h-11 items-center gap-1 rounded-full bg-white px-3 text-[14px] font-semibold leading-5 text-[#344054] hover:bg-[#f8fafc] hover:text-[#155eef] ${buttonMotion}`}>
                Cart
                <span className="ml-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#2563eb] px-1.5 text-[12px] font-medium leading-none text-white">{cartCount}</span>
              </button>
            </div>
            <button className={`flex h-11 shrink-0 items-center gap-1 rounded-full bg-[#0f172a] px-4 text-[14px] font-semibold leading-5 text-white hover:-translate-y-0.5 hover:bg-[#155eef] hover:shadow-lg ${pillShadow} ${buttonMotion}`}>
              <UserIcon />
              Login/Signup
            </button>
          </div>
        </div>
      </header>

      <nav>
        <div className="mx-auto flex h-[76px] max-w-[1280px] items-start justify-between overflow-x-auto px-5 pt-5 lg:px-0">
          <div className="flex h-14 min-w-[345px] shrink-0 items-center gap-8 rounded-full bg-white px-6 py-4">
            {["Shop", "Categories", "Promotions", "New Menu", "About"].map((item) => (
              <button key={item} className={`${navLinkMotion} gap-2 ${smoothMotion}`}>
                <span>{item}</span>
                {item === "Categories" && <ChevronDownIcon />}
              </button>
            ))}
          </div>
          <div className="flex h-14 shrink-0 items-center gap-8 rounded-full bg-white px-6 py-4">
            {["Policy", "FAQs", "Help & Support"].map((item) => (
              <button key={item} className={`${navLinkMotion} gap-2 ${smoothMotion}`}>
                {item === "Help & Support" && <HeadphoneIcon />}
                <span>{item}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
      </div>

      <section ref={heroRef} className="px-5 py-5 lg:px-20">
        <div className="relative mx-auto h-[700px] max-w-[1280px] overflow-hidden rounded-[32px] bg-gradient-to-b from-[#3b82f6] to-[#1e40af]">
          <img src={assets.heroBg} alt="" className="absolute left-[-59px] top-[-74px] h-[783px] w-[1398px] max-w-none object-cover opacity-20 blur-[2px]" />
          <h1
            key={`hero-title-${heroCycle}`}
            className="absolute left-1/2 top-0 z-10 -translate-x-1/2 bg-gradient-to-b from-white from-[26%] to-white/40 bg-clip-text text-center font-serif text-[76px] leading-[1.1] tracking-normal text-transparent sm:text-[118px] md:text-[152px] lg:text-[200px] lg:leading-[257px]"
            style={{ animation: "hero-title-rise 2400ms cubic-bezier(0.16,1,0.3,1) 260ms both" }}
          >
            FRESHMILK
          </h1>
          <img src={assets.woman} alt="" className="absolute left-1/2 top-[110px] z-10 h-[470px] w-[470px] -translate-x-1/2 object-contain sm:top-[86px] sm:h-[540px] sm:w-[540px] lg:top-[60px] lg:h-[640px] lg:w-[640px]" />
          <div className="absolute bottom-5 left-5 z-20 max-w-[400px]">
            <span
              key={`hero-badge-${heroCycle}`}
              className="inline-flex items-center rounded-full bg-[#fde047] px-4 py-0.5 text-[14px] font-medium leading-5 text-[#172554]"
              style={{ animation: "hero-fade-up 1500ms cubic-bezier(0.16,1,0.3,1) 820ms both" }}
            >
              <MilkPailIcon />
              <span className="ml-1.5" />
              Fresh Every Morning
            </span>
            <h2
              key={`hero-copy-${heroCycle}`}
              className="mt-5 max-w-[375px] text-[32px] font-semibold leading-[40px] text-white sm:text-[36px] sm:leading-[44px]"
              style={{ animation: "hero-fade-up 1800ms cubic-bezier(0.16,1,0.3,1) 1120ms both" }}
            >
              100% Real Cow's Milk
              <br />
              Direct from Farm
            </h2>
            <p
              key={`hero-text-${heroCycle}`}
              className="mt-[10px] max-w-[400px] text-[16px] font-medium leading-6 text-[#cbd5e1]"
              style={{ animation: "hero-fade-up 1800ms cubic-bezier(0.16,1,0.3,1) 1440ms both" }}
            >
              Shop pasteurized milk, homemade yogurt, and premium dairy products delivered directly from our farm to your door for everyone's health.
            </p>
            <button
              key={`hero-button-${heroCycle}`}
              className={`mt-6 flex h-[60px] items-center gap-3 rounded-full bg-[#0f172a] pl-6 pr-4 text-[16px] font-semibold leading-6 text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#155eef] hover:shadow-xl ${buttonMotion}`}
              style={{ animation: "hero-fade-up 1800ms cubic-bezier(0.16,1,0.3,1) 1760ms both" }}
            >
              Shop Now
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#0f172a]">
                <ChevronRightIcon />
              </span>
            </button>
          </div>
          <div key={`hero-card-${heroCycle}`} className="absolute bottom-5 right-5 z-20 hidden lg:block" style={{ animation: "hero-card-slide 2000ms cubic-bezier(0.16,1,0.3,1) 2120ms both" }}>
            <ProductCard image={assets.heroSet} title="Freshmilk Set" hero />
          </div>
        </div>
      </section>

      <Section title="Popular Categories">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {categoryNames.map((label, index) => (
            <CategoryCard key={label} image={assets.categories[index]} label={label} />
          ))}
        </div>
      </Section>

      <Section title="Today's New Menu">
        <ProductGrid onAddToCart={addToCart} />
      </Section>

      <Section title="Today's New Menu">
        <ProductGrid offset={6} onAddToCart={addToCart} />
      </Section>

      <Cta />
      <FeatureCards />

      <Section title="Weekly Best Sellers">
        <ProductGrid offset={12} onAddToCart={addToCart} />
      </Section>

      <FarmStory />
      <PressMentions />
      <Cta variant="cream" />
      <Footer />
    </main>
  );
}
