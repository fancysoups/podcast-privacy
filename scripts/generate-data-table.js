const fs = require('fs');
const { podcastHostData } = require('../data/podcast-hosts');

const TRUE_LABEL = '✅';
const FALSE_LABEL = '❌';

let DATA_OVERVIEW_md = '';

DATA_OVERVIEW_md += `# Data Overview\n\n`;
DATA_OVERVIEW_md += `An overview of host data showing what's complete and incomplete in the current build.\n\n`;

const table = Object.entries(podcastHostData)
  .map(([key, host]) => ({
    key,
    name: host.name,
    logo: !!host.logoURL,
    privacyPolicy: !!host.privacyPolicyURL,
    abilities: host.abilities.length > 0,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

DATA_OVERVIEW_md += `| URL Pattern | Name | Has Abilities | Has Privacy Policy URL | Has Logo URL\n`;
DATA_OVERVIEW_md += `| --- | --- | --- | --- | --- |\n`;

for (const row of table) {
  DATA_OVERVIEW_md += `| ${row.key} | ${row.name} | ${
    row.abilities ? TRUE_LABEL : FALSE_LABEL
  } | ${row.privacyPolicy ? TRUE_LABEL : FALSE_LABEL} | ${
    row.logo ? TRUE_LABEL : FALSE_LABEL
  } |\n`;
}

fs.writeFileSync('./DATA_OVERVIEW.md', DATA_OVERVIEW_md);
