import {useState} from "react";
import {Card,CardHeader,CardTitle,CardContent} from "./components/ui/card";
import {Button} from "./components/ui/button";
import {Input} from "./components/ui/input";
import {Label} from "./components/ui/label";
import {Dialog} from "./components/ui/dialog";

function App(){
 const [nombre,setNombre]=useState("");
 const [correo,setCorreo]=useState("");
 const [mensaje,setMensaje]=useState("");
 const [info,setInfo]=useState(false);

 function enviar(e:React.FormEvent){
  e.preventDefault();
  if(!nombre || !correo){setMensaje("Completa todos los campos.");return;}
  setMensaje("¡Formulario enviado correctamente!");
 }

 return <main className="pagina">
  <Card>
   <CardHeader><CardTitle>Formulario de contacto</CardTitle><p>Ejercicio sencillo con shadcn/ui</p></CardHeader>
   <CardContent>
    <form onSubmit={enviar}>
     <Label htmlFor="nombre">Nombre</Label>
     <Input id="nombre" placeholder="Escribe tu nombre" value={nombre} onChange={e=>setNombre(e.target.value)}/>
     <Label htmlFor="correo">Correo electrónico</Label>
     <Input id="correo" type="email" placeholder="ejemplo@gmail.com" value={correo} onChange={e=>setCorreo(e.target.value)}/>
     <Button type="submit">Enviar formulario</Button>
    </form>
    {mensaje && <p className="mensaje">{mensaje}</p>}
    <Button onClick={()=>setInfo(true)} className="gris">Ver información</Button>
   </CardContent>
  </Card>
  <Dialog open={info} onClose={()=>setInfo(false)}>
   <h2>Sobre el ejercicio</h2>
   <p>Usamos Card, Input, Label, Button y Dialog. También usamos useState para guardar los datos y mostrar mensajes.</p>
   <Button onClick={()=>setInfo(false)}>Cerrar</Button>
  </Dialog>
 </main>
}
export default App;