import * as fs from "fs/promises";
import path from "path"; 

// Example function to read a file asynchronously
async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    if (data) {
      console.log("File content:", data);
    } else {
      console.log("File is empty");
    }  
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// Call the function with a sample file path
const filePath = path.join(".", "public", "index.txt");
readFile(filePath);
