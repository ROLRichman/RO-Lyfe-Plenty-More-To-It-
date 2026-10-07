window.ROLYFE_LINKS = {
  myComicShop: {
    name: "MyComicShop",
    base: "https://www.mycomicshop.com/",
    affiliateId: "",
    affiliateParameter: "AffID",
    affiliateProgram: "https://www.mycomicshop.com/affiliateprogram",
    disclosure: "Affiliate relationship may provide compensation on qualifying referrals."
  }
};

window.rolyfeAffiliateUrl = function(path = "") {
  const item = window.ROLYFE_LINKS.myComicShop;
  const cleanPath = path.replace(/^\/+/, "");
  const url = new URL(item.base);
  const parts = cleanPath.split("?");
  if (parts[0]) url.pathname = "/" + parts[0].replace(/^\/+/, "");
  if (parts[1]) new URLSearchParams(parts[1]).forEach((v,k) => url.searchParams.set(k,v));
  if (item.affiliateId) url.searchParams.set(item.affiliateParameter, item.affiliateId);
  return url.toString();
};

window.ROLYFE_CHARACTERS = [
  ["Adam Strange","DC","other","Adam Strange"],
  ["Aquaman","DC","dc","Aquaman"],
  ["Archie","Archie","other","Archie"],
  ["Avengers","Marvel","marvel","Avengers"],
  ["Batman","DC","dc","Batman"],
  ["Black Panther","Marvel","marvel","Black Panther"],
  ["Captain America","Marvel","marvel","Captain America"],
  ["Captain Marvel","Marvel","marvel","Captain Marvel"],
  ["Conan","Other","other","Conan"],
  ["Daredevil","Marvel","marvel","Daredevil"],
  ["Deadpool","Marvel","marvel","Deadpool"],
  ["Defenders","Marvel","marvel","Defenders"],
  ["Doctor Doom","Marvel","marvel","Doctor Doom"],
  ["Doctor Strange","Marvel","marvel","Doctor Strange"],
  ["Fantastic Four","Marvel","marvel","Fantastic Four"],
  ["The Flash","DC","dc","The Flash"],
  ["Galactus","Marvel","marvel","Galactus"],
  ["Ghost Rider","Marvel","marvel","Ghost Rider"],
  ["Green Arrow","DC","dc","Green Arrow"],
  ["Green Lantern","DC","dc","Green Lantern"],
  ["Green Goblin","Marvel","marvel","Green Goblin"],
  ["Hellboy","Other","other","Hellboy"],
  ["Hulk","Marvel","marvel","Incredible Hulk"],
  ["Invincible","Other","other","Invincible"],
  ["Iron Fist","Marvel","marvel","Iron Fist"],
  ["Iron Man","Marvel","marvel","Iron Man"],
  ["Joker","DC","dc","The Joker"],
  ["Justice League","DC","dc","Justice League"],
  ["Legion of Super Heroes","DC","dc","Legion of Super Heroes"],
  ["Luke Cage","Marvel","marvel","Luke Cage"],
  ["Magneto","Marvel","marvel","Magneto"],
  ["Moon Knight","Marvel","marvel","Moon Knight"],
  ["Nick Fury","Marvel","marvel","Nick Fury"],
  ["Punisher","Marvel","marvel","The Punisher"],
  ["Silver Surfer","Marvel","marvel","Silver Surfer"],
  ["Spawn","Other","other","Spawn"],
  ["Spider-Man","Marvel","marvel","Spider-Man"],
  ["Sub-Mariner","Marvel","marvel","Submariner"],
  ["Supergirl","DC","dc","Supergirl"],
  ["Superman","DC","dc","Superman"],
  ["Swamp Thing","DC","dc","Swamp Thing"],
  ["Thanos","Marvel","marvel","Thanos"],
  ["Thor","Marvel","marvel","Thor"],
  ["Transformers","Other","other","Transformers"],
  ["Venom","Marvel","marvel","Venom"],
  ["Walking Dead","Other","other","Walking Dead"],
  ["Watchmen","DC","dc","Watchmen"],
  ["Wolverine","Marvel","marvel","Wolverine"],
  ["Wonder Woman","DC","dc","Wonder Woman"],
  ["X-Men","Marvel","marvel","X-Men"],
  ["Dragon Ball Z","Other","other","Dragonball Z"],
  ["Teenage Mutant Ninja Turtles","Other","other","Teenage Mutant Ninja Turtles"]
];

window.ROLYFE_RESOURCES = [
  {name:"MyComicShop", category:"Comic Marketplace", description:"Comics, graphic novels, collectibles, auctions, supplies and related material.", url:"https://www.mycomicshop.com/", affiliate:true},
  {name:"MyComicShop Affiliate Program", category:"Affiliate", description:"Official affiliate enrollment and linking instructions.", url:"https://www.mycomicshop.com/affiliateprogram", affiliate:true}
];