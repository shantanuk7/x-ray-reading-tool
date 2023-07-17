'use client'

import React from "react";

export default function About() {
  return (
    <div className="about">
      <h1>x-ray-reading-tool</h1>
      <p>
        Our X-ray Reading Tool is a state-of-the-art, end-to-end solution designed to aid medical professionals in accurately classifying Chest X-ray images for the presence of pneumonia. Leveraging the power of <a href="https://www.tensorflow.org/" target="_blank">TensorFlow 2.x</a> and <a href="https://www.tensorflow.org/hub" target="_blank">TensorFlow Hub</a>, our tool employs advanced deep learning and transfer learning techniques to achieve high-precision results.
      </p>
      <section>
        <h2>Problem Statement</h2>
        <p>
          The primary goal of this tool is to assist in the early and efficient diagnosis of pneumonia by analyzing Chest X-ray images. Pneumonia is a common and potentially life-threatening respiratory condition, and timely detection is crucial for effective patient care and management. Our tool aims to streamline the diagnostic process, providing reliable predictions to support medical practitioners in making informed decisions.
        </p>
      </section>
      <section>
        <h2>Data</h2>
        <p>
          To develop and train our X-ray Reading Tool, we have utilized the <a href="https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia" target="_blank">Chest X-Ray Images (Pneumonia) dataset</a> from Kaggle. This dataset is a widely recognized and reputable collection of labeled Chest X-ray images, making it a reliable source for training and evaluation.
          <p>
            You can find the dataset <a href="https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </p>
      </section>
      <section>
        <h2>Features</h2>
        <p>
          Here are some key features of our tool:
        </p>
        <ul>
          <li>Deep Learning and Transfer Learning: Given the unstructured nature of X-ray images, our tool harnesses the power of deep learning and transfer learning algorithms. This allows it to extract meaningful features from the images, enabling accurate classification and detection of pneumonia cases.</li>
          <li>Multi-Class Classification: The tool classifies Chest X-ray images into three distinct categories: &lsquo;NORMAL&rsquo;, &lsquo;bacteria&rsquo;, and &lsquo;virus&rsquo;. This multi-class classification capability enhances its versatility and usefulness in identifying different types of pneumonia.</li>
          <li>Robust Training Set: Our tool has been trained on a substantial dataset containing over 5,000 labeled Chest X-ray images. This extensive training ensures that the model has learned a diverse range of patterns, leading to improved accuracy and generalization on new, unseen data.</li>
          <li>Comprehensive Test Set: To evaluate the tool&rsquo;s performance, we have curated a test set comprising approximately 3,000 Chest X-ray images without labels. These images will be used for prediction, allowing us to assess the model&rsquo;s ability to make accurate and reliable classifications on unseen data.</li>
        </ul>
      </section>
      <section>
        <h2>References:</h2>
        <ul>
          <li><a href="https://colab.research.google.com/drive/1zTHxhzdPNvxnw5kwNi7K0otmUNKhdwT7?usp=sharing">X-ray Reading Tool Notebook</a></li>
          <li><a href="https://github.com/shantanuk7/x-ray-reading-tool/">GitHub Repository</a></li>
          <li><a href="https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia">Dataset</a></li>
        </ul>
      </section>
    </div>
  );
}
