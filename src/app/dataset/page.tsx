import Image from 'next/image';

export default function Dataset() {
  return (
    <div className="dataset">
      <div className="container">
        <h1>Chest X-Ray Images (Pneumonia) - About Dataset</h1>

        <div className="section">
          <h2>Context</h2>
          <p>
            The dataset consists of chest X-ray images of pediatric patients with Pneumonia and Normal conditions.
          </p>
          <p>
            The dataset is organized into 3 folders (train, test, val) and contains subfolders for each image category (Pneumonia/Normal). There are 5,863 X-Ray images (JPEG) and 2 categories (Pneumonia/Normal).
          </p>
          <p>
            Chest X-ray images (anterior-posterior) were selected from retrospective cohorts of pediatric patients of one to five years old from Guangzhou Women and Children’s Medical Center, Guangzhou. All chest X-ray imaging was performed as part of patients’ routine clinical care.
          </p>
          <p>
            For the analysis of chest x-ray images, all chest radiographs were initially screened for quality control by removing all low quality or unreadable scans. The diagnoses for the images were then graded by two expert physicians before being cleared for training the AI system. In order to account for any grading errors, the evaluation set was also checked by a third expert.
          </p>
        </div>

        {/* Add the epoch_accuracy image */}
        <div className="image-row">
          <div className="image-container">
            <h3>Normal</h3>
            <Image src='/images/normal.jpeg' alt="Normal" />
          </div>
          <div className="image-container">
            <h3>Bacterial Pneumonia</h3>
            <Image src="/images/bacterial_pneumonia.jpeg" alt="Bacterial Pneumonia" />
          </div>
          <div className="image-container">
            <h3>Viral Pneumonia</h3>
            <Image src="/images/viral_pneumonia.jpeg" alt="Viral Pneumonia" />
          </div>
        </div>

        <div className="section">
          <h2>Acknowledgements</h2>
          <p>Data: <a href="https://data.mendeley.com/datasets/rscbjbr9sj/2">https://data.mendeley.com/datasets/rscbjbr9sj/2</a></p>
          <p>License: <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></p>
          <p>Citation: <a href="http://www.cell.com/cell/fulltext/S0092-8674(18)30154-5">http://www.cell.com/cell/fulltext/S0092-8674(18)30154-5</a></p>
        </div>
      </div>
    </div>
  );
}
