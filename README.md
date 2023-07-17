# x-ray-reading-tool
## Python Notebook for x-ray-reading-tool and visualization of train data and validation data

#  End-to-end x-ray-reading-tool Classification💻

This notebook builds an end-to-endEnd-to-end x-ray-reading-tool Classification using TensorFlow 2.x and TensorFlow Hub.

## 1. Problem

Identifying the given  x-ray of a Chest is having Pneumonia or not.



## 2. Data

The data we're using is from Kaggle's Chest X-Ray Images (Pneumonia).

https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia

## 3. Features

Some information about the data:
* We're dealing with images (unstructured data) so it's probably best we use deep learning/transfer learning.
* There are 3 labels (probability) (this means whether x-ray image is ['NORMAL', 'bacteria', 'virus']).
* There are around 5,000+ images in the training set (these images have labels).
* There are around 3,000+ images in the test set (these images have no labels, because we'll want to predict them). 

