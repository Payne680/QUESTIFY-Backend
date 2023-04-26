const notifyService = require("./notifyService");


class notifyController {
  constructor() {
    this.NotifyService = new notifyService();
  }

  getAllNotify(req, res) {
    this.NotifyService
      .getAllNotifications(req.body)
      .then((notify) => res.status(201).send(notify))
      .catch((err) => res.status(500).send(err));
  }

  getOneNotify(req, res) {
    this.NotifyService
      .getOneNotification(req.params.id)
      .then((notify) => res.status(201).send(notify))
      .catch((err) => res.status(500).send(err));
  }

  addNotify(req, res) {
    const { title } = req.body;

    if (!(title)) {
      return res.status(406).send({ message: "Missing notify Info" });
    }
    this.NotifyService
      .addNotification(title)
      .then((notify) => res.status(201).send(notify))
      .catch((err) => res.status(500).send(err));
  }

  patchOneNotification(req, res) {
    this.NotifyService
      .editOneNotification(req.body, req.params.id)
      .then((updatednotify) => res.status(202).send(updatednotify))
      .catch((err) => res.status(401).send(err));
  }

  deleteOneNotification(req, res) {
    this.NotifyService
      .deleteOneNotification(+req.params.id)
      .then(() => res.sendStatus(202))
      .catch((err) => res.status(500).send(err));
  }
}

// const patchOnenotify = async (req, res) => {
//   const notify = await notify.findOne({ where: { id: +req.params.id } });

//   if (!notify) return res.status(401).send("{ notify does not exist }");

//   await notify.update(req.body, { where: { id: +req.params.id } });

//   const updatednotify = await notify.findOne({ where: { id: req.params.id } });

//   res.status(202).send(updatednotify);
// };

/* console.log('this notifyController in controller', notifyController, new notifyController()) */

module.exports = notifyController;