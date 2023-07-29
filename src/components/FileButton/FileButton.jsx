import styles from './FileButton.module.css';
import { useState } from 'react';

export default function FileButton({ id, label }) {

  const [file, setFile] = useState();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file.name);
  }

  return (
    <div className={styles.fileButton}>
      <label className={styles.label}>{label}</label>
      <div className={styles.buttonContainer}>
        <input className={styles.button} type='button' onClick={() => document.getElementById(`${id}`)?.click()} value='Upload Picture' />
        <span className={styles.imageName} id='fileName'>{file}</span>
      </div>
      <input type="file" onChange={handleChange} accept="image/*" id={id} hidden />
    </div>
  )
}