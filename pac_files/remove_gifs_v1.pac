function FindProxyForURL(url, host) {

	// Gif Block

	if(dnsDomainIs(host, "smoot.apple.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "aaplimg.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "palmettostatearmory.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "cheaperthandirt.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "giphy.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "js.media-lab.ai")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "api.giphy.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "tenor.co")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "tenor.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "api.tenor.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "giphy.p.rapidapi.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "api.tenor.co")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "api-glb-nyc.smoot.apple.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "bag-smoot.v.aaplimg.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "api.gfycat.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "gfycat.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "mojipop.p.rapidapi.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "guggy.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "img.guggy.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "gifs.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "api.cognitive.microsoft.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "api.imgur.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "imgur.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "scraperapi.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "serpapi.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "tineye.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "zenserp.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "usearch.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "yandex.com")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "infringement.report")) return "PROXY 0.0.0.0:3421";
	if(dnsDomainIs(host, "api.infringement.report")) return "PROXY 0.0.0.0:3421";
	if(shExpMatch(url, "*gfycat*")) return "PROXY 0.0.0.0:3421";
	if(shExpMatch(url, "*giphy*")) return "PROXY 0.0.0.0:3421";
	if(shExpMatch(url, "*tenor.com*")) return "PROXY 0.0.0.0:3421";

	return "DIRECT;";
}
