"use client";
import { useState } from "react";
import api from "@/services/api";

export default function NovoAnimePage() {
  const [anime, setAnime] = useState({ nome: "", genero: "" });
  const [mensagem, setMensagem] = useState("");
}
