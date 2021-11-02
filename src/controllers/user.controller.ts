import { Request, Response } from "express";
import User from "../models/user";

export const registro = async (req: Request, res: Response) => {
  if (!req.body.email) {
    return res.status(400).json({ msg: "Por favor. Ingresa tu correo" });
  }

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ msg: "El usuario ya existe" });
  }

  const newUser = new User(req.body);

  await newUser.save();

  return res.status(201).json(newUser);
};

export const lista = async (req: Request, res: Response) => {
  const list = await User.find();

  return res.status(200).json(list);
};

export const obtenerUsuario = async (req: Request, res: Response) => {
  const user = await User.findOne({ _id: req.params.id });

  return res.status(200).json(user);
};

export const actualizarUsuario = async (req: Request, res: Response) => {
  const user = await User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      email: req.body.email,
    }
  );

  return res.status(200).json(user);
};

export const eliminarUsuario = async (req: Request, res: Response) => {
  const user = await User.findByIdAndDelete({ _id: req.params.id });

  return res.status(200).json(user);
};
