import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IModel } from "@/common/interfaces/IModel";
import { getModelById } from "@/services/serviceModel";

export default function ModelFormEdit() {
  const { id } = useParams();

  const [selectModelToEdit, setSelectModelToEdit] = useState<IModel>();

  useEffect(() => {
    const handleGetModelById = async () => {
      if (id) {
        const data = await getModelById(id);
        setSelectModelToEdit(data);
      }
    };
    handleGetModelById();
  }, [id]);

  return (
    <section className="w-[50%] mx-auto bg-carbon-bg-modal">
      <div>
        {selectModelToEdit && (
          <form>
            <label>
              Nome
              <input type="text" defaultValue={selectModelToEdit.model_name} />
            </label>
          </form>
        )}
      </div>
    </section>
  );
}
