import express from "express";
import { config as cfg } from "../controllers/system/selector.js";

const config = express.Router();

config.get("/", (req, res) => {
  res.status(200).json({ mensagem: "Rota GET exemplo, tudo OK!"});
});

// Requisições genericas de configuração de dados enviados pelo Gerenciador Assistente Bix
config.post("/", async (req, res) => {
  try {
    console.log('\x1b[33m%s\x1b[0m', 'handleConfigRequest req: ', req);
    const response = await cfg.handleConfigRequest(req.body);
    console.log('\x1b[33m%s\x1b[0m', 'handleConfigRequest response: ', response);
    res.status(200).json('OK');
  } catch (error) {
    res.status(500).json("Erro ao enviar a resposta!");
    console.log('\x1b[31m%s\x1b[0m',error);
  }
});

// Requisições de criação de um novo chatbot enviados pelo Gerenciador Assistente Bix
// Retorna o QR Code
config.post("/createChatbot", async (req, res) => {
  try {
    // console.log('\x1b[33m%s\x1b[0m', 'createChatbot req: ', req.body);
    const response = await cfg.createChatbot(req.body);
    console.log('response: ', response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json("Erro ao enviar a resposta!");
    console.log('\x1b[31m%s\x1b[0m', error);
  }
});

// Requisições de aviso, que a session no wppconnect-server finalizou a inicialização
config.post("/sessionCreated", async (req, res) => {
    try {
      console.log('\x1b[33m%s\x1b[0m', 'sessionCreated req: ', req.body);
      const response = await cfg.handleConfigRequest(req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json("Erro ao enviar a resposta!");
      console.log('\x1b[31m%s\x1b[0m', error);
    }
});

// Requisições de verificação do status da session enviados pelo Gerenciador Assistente Bix
config.post("/checkConnectionSession", async (req, res) => {
    try {
      console.log('\x1b[33m%s\x1b[0m', 'checkConnectionSession req: ', req.body);
      const response = await cfg.handleConfigRequest(req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json("Erro ao enviar a resposta!");
      console.log('\x1b[31m%s\x1b[0m', error);
    }
});

// Requisições de atualização de um dado especifico do chatbot enviados pelo Gerenciador Assistente Bix
config.post("/updateChatbot", async (req, res) => {
    try {
      console.log('\x1b[33m%s\x1b[0m', 'updateChatbot req: ', req.body);
      const response = await cfg.handleConfigRequest(req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json("Erro ao enviar a resposta!");
      console.log('\x1b[31m%s\x1b[0m', error);
    }
});

export default config;