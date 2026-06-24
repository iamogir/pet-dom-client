import {useAddPetForm} from "features/addPet";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import style from './avatarStep.module.css'
import {useEffect, useMemo, useState} from "react";
import Cropper, {type Area} from "react-easy-crop";
import {getCroppedImage} from "shared/lib";

interface Props {
    form: ReturnType<typeof useAddPetForm>;
    onSubmit: (avatar?: File) => void;
    isPending: boolean;
}

export const AvatarStep = ({ form, onSubmit, isPending }: Props) => {

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const previewUrl = useMemo(() => {
        if (!form.formData.avatar)
            return null;
        return URL.createObjectURL(form.formData.avatar);
    }, [form.formData.avatar]);

    const canPreviewLocally = (file: File) => {
        return ['image/jpeg', 'image/png', 'image/webp'].includes(file.type);
    };

    const handleUnpinPhoto = () => {
        form.setFormFields('avatar' as keyof FormData, '');
        setCrop({ x: 0, y: 0 });
        setZoom(1);
        setCroppedAreaPixels(null);
    }

    const handleSubmit = async () => {
        if (!form.formData.avatar || !previewUrl || !croppedAreaPixels) {
            onSubmit();
            return;

        }

        const croppedFile = await getCroppedImage(previewUrl, croppedAreaPixels, form.formData.avatar.name);
        onSubmit(croppedFile);
    }

    useEffect(() => {
        if (!previewUrl) return;

        return () => {
            URL.revokeObjectURL(previewUrl);
        };

    }, [previewUrl]);

    return (
        <article className={style.container}>
            <Input type={'file'}
                   label={"Want to upload a photo?"}
                   name={'avatar'}
                   accept={"image/jpeg,image/png,image/webp,image/heic,image/heif"}
                   value={form.formData.avatar?.name}
                   className={style.inputBox}
                   onClick={handleUnpinPhoto}
                   onChange={(e) => {
                       const file = e.target.files?.[0];
                       if (!file) return;
                       form.setFormFields(e.target.name as keyof FormData, file)
                   }}
            />

            {previewUrl && form.formData.avatar && canPreviewLocally(form.formData.avatar) ? (
                <div className={style.imageBox}>
                    <Cropper
                        image={previewUrl}
                        crop={crop}
                        zoom={zoom}
                        aspect={16/9}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={(_, areaPixels) => {
                            setCroppedAreaPixels(areaPixels);
                        }}
                    />
                    {/*<input type="range" min={1} max={3} step={0.1} value={zoom}*/}
                    {/*    onChange={(e) => setZoom(Number(e.target.value))} />*/}
                </div>
            ) :
                form.formData.avatar ? (
                    <div className={style.imageBox}>
                        <p>Everything is fine! The file has been uploaded successfully. A preview will appear soon, press ----- submit.</p>
                    </div>) : null
            }

            <div className={style.buttons}>
                <Button onClick={form.prevStep} text={'Back'}/>
                <Button onClick={handleSubmit} text={'Submit'} disabled={isPending}/>
            </div>
        </article>
    );
};