module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/logo.svg");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/scripts");

  eleventyConfig.addCollection("blog", function(api) {
    return api.getFilteredByGlob("src/blog/*.md").reverse();
  });

  eleventyConfig.addFilter("readableDate", function(dateObj) {
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
  });

  eleventyConfig.addFilter("limit", function(arr, n) {
    return arr.slice(0, n);
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
