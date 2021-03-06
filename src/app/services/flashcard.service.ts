import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FlashcardSet } from '../model/flashcard-set';
import { FlashcardStar } from '../model/flashcard-star';
import { UserPermission } from '../model/user-permission';
import { environment } from 'src/environments/environment';
import { FlashcardSetEdit } from '../model/flashcard-set-edit';
import { FlashcardSetImport } from '../model/flashcard-set-import';


@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  public static REST_API_SERVER = environment.apiHost;

  constructor(private httpClient: HttpClient) {

  }

  public getFlashcardsSets() {
    return this.httpClient.get<any>(FlashcardService.REST_API_SERVER + "flashcard-sets");
  }

  public getFlashcardSet(id: number) {
    const params = new HttpParams().set("id", id);
    return this.httpClient.get<any>(FlashcardService.REST_API_SERVER + "flashcard-set", {params});
  }

  public getFlashcardSetName(id: number) {
    const params = new HttpParams().set("id", id);
    return this.httpClient.get<any>(FlashcardService.REST_API_SERVER + "flashcard-set-name", {params});
  }

  public editFlashcardSet(flashcardSetEdit: FlashcardSetEdit) {
    return this.httpClient.put<any>(FlashcardService.REST_API_SERVER + "flashcard-set-edit", flashcardSetEdit);
  }

  public importFlashcardSet(flashcardSetImport: FlashcardSetImport) {
    return this.httpClient.put<any>(FlashcardService.REST_API_SERVER + "flashcard-set-import", flashcardSetImport);
  }

  public createNewFlashcardSet(flashcardSetName: string) {
    return this.httpClient.post<any>(FlashcardService.REST_API_SERVER + "flashcard-set-create", flashcardSetName);
  }

  public deleteFlashcardSet(flashcardSet: FlashcardSet) {
    return this.httpClient.put<any>(FlashcardService.REST_API_SERVER + "flashcard-set-delete", flashcardSet.id);
  }

  public addFlashcardStar(flashcardSetID: number, flashcardTerm: string, flashcardDefinition: string) {
    return this.httpClient.put<any>(FlashcardService.REST_API_SERVER + "flashcard-add-star", new FlashcardStar(flashcardSetID, flashcardTerm, flashcardDefinition));
  }

  public removeFlashcardStar(flashcardSetID: number, flashcardTerm: string, flashcardDefinition: string) {
    return this.httpClient.put<any>(FlashcardService.REST_API_SERVER + "flashcard-remove-star", new FlashcardStar(flashcardSetID, flashcardTerm, flashcardDefinition));
  }

  public getFlahcardSetPermissions(flashcardSetID: number) {
    const params = new HttpParams().set("id", flashcardSetID);
    return this.httpClient.get<any>(FlashcardService.REST_API_SERVER + "flashcard-set-permissions", {params});
  }

  public editFlashcardSetUserPermission(userPermission: UserPermission) {
    return this.httpClient.put<any>(FlashcardService.REST_API_SERVER + "flashcard-set-change-permission", userPermission);
  }

  public removeFlashcardSetUserPermission(userPermission: UserPermission) {
    return this.httpClient.put<any>(FlashcardService.REST_API_SERVER + "flashcard-set-remove-permission", userPermission);
  }

  public addFlashcardSetUserPermission(userPermission: UserPermission) {
    return this.httpClient.put<any>(FlashcardService.REST_API_SERVER + "flashcard-set-add-permission", userPermission);
  }

}
