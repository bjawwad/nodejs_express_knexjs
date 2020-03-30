import db from "../db/index";

/**
 * @param {*} req - body: {
 * firstName: <string>,
 * lastName: <string>,
 * email: <string>,
 * company: <string>,
 * phone: <number>
 * }
 * @param {*} res
 */

export const addNewContact = async (req, res) => {
  const { firstName, lastName, email, company, phone } = req.body;
  const result = await db("contacts").insert({
    firstName,
    lastName,
    email,
    company,
    phone
  });

  if (result && result.length > 0) {
    const [id] = result;
    const selectResult = await db("contacts")
      .select("*")
      .where({ id });

    const [contact] = selectResult;
    res
      .status(200)
      .json({ success: true, code: 200, data: { contact: { ...contact } } });
  } else {
    res
      .status(400)
      .json({ success: false, code: 500, message: "Something is wrong" });
  }
};

export const getAllContacts = async (req, res) => {
  const contacts = await db("contacts").select("*");
  if (contacts && contacts.length > 0) {
    res.status(200).json({ success: true, code: 200, data: { contacts } });
  }
};
