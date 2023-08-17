const {Router} = require("express");
const {db} = require("../firebase")


const router = Router();

router.get('/', async (req, res) => {

    const querySnapshot = await db.collection("jugadores").get()

    const jugadores = querySnapshot.docs.map(doc =>  ({
        id: doc .id,
        ...doc.data()
    }))

    console.log(jugadores);

    res.render("index", {jugadores});
});

router.post('/new-jugador', async (req, res) => {
    const { nombre, equipo, email, telefono } = req.body;
    await db.collection("jugadores").add({
      nombre,
      equipo,
      email,
      telefono,
    });
    res.redirect("/")
  });

  router.get("/edit-jugador/:id", async (req, res) => {
    const doc = await db.collection("jugadores").doc(req.params.id).get();

    res.render("index", { jugador: { id: doc.id, ...doc.data() } });

  });

  router.get("/delete-jugador/:id", async (req, res) => {

    await db.collection("jugadores").doc(req.params.id).delete()

    res.redirect("/")

  })

  router.post("/update-jugador/:id", async (req, res) =>{

    const {id} = req.params

    await db.collection("jugadores").doc(id).update(req.body)

    res.redirect("/");

  })

module.exports = router;