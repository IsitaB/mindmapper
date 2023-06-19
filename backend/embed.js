import * as dotenv from 'dotenv'
dotenv.config()

import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
// import { PineconeStore } from 'langchain/vectorstores'

import * as fs from 'fs'

const textSplitter = new RecursiveCharacterTextSplitter({chunkSize:1000, chunkOverlap: 20})

const embedder = new OpenAIEmbeddings()

import { index } from './pinecone.js'
(async () => {
  const article = await fs.readFileSync('article.txt', {encoding:'utf-8'})
  const splittedText = await textSplitter.createDocuments([article]);
  const embeddings = embedder.embedDocuments(splittedText);
  //PineconeStore.fromDocuments(splittedText, embedder, { pineconeIndex: index, namespace: 'langchain' });
}) ()