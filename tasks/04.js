function addRegister(str) {
    let words = str.split(" ");
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    return words.join(" ");
}

function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }

    let truncated = str.slice(0, maxLength);
    let lastSpaceIndex = truncated.search(/[\s,.!?:;](?=[^\s,.!?:;]*$)/);

    if (lastSpaceIndex === -1) {
        return truncated + "...";
    }

    return truncated.slice(0, lastSpaceIndex) + "...";
}

function isSubstring(str1, str2) {
  return str1.includes(str2) || str2.includes(str1);
}