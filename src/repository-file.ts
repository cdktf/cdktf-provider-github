// https://www.terraform.io/docs/providers/github/r/repository_file.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RepositoryFileConfig extends TerraformMetaArguments {
  /** The branch name, defaults to "master" */
  readonly branch?: string;
  /** The commit author name, defaults to the authenticated user's name */
  readonly commitAuthor?: string;
  /** The commit author email address, defaults to the authenticated user's email address */
  readonly commitEmail?: string;
  /** The commit message when creating or updating the file */
  readonly commitMessage?: string;
  /** The file's content */
  readonly content: string;
  /** The file path to manage */
  readonly file: string;
  /** The repository name */
  readonly repository: string;
}

// Resource

export class RepositoryFile extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RepositoryFileConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_file',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._branch = config.branch;
    this._commitAuthor = config.commitAuthor;
    this._commitEmail = config.commitEmail;
    this._commitMessage = config.commitMessage;
    this._content = config.content;
    this._file = config.file;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: true, required: false
  private _branch?: string;
  public get branch() {
    return this._branch;
  }
  public set branch(value: string | undefined) {
    this._branch = value;
  }

  // commit_author - computed: true, optional: true, required: false
  private _commitAuthor?: string;
  public get commitAuthor() {
    return this._commitAuthor ?? this.getStringAttribute('commit_author');
  }
  public set commitAuthor(value: string | undefined) {
    this._commitAuthor = value;
  }

  // commit_email - computed: true, optional: true, required: false
  private _commitEmail?: string;
  public get commitEmail() {
    return this._commitEmail ?? this.getStringAttribute('commit_email');
  }
  public set commitEmail(value: string | undefined) {
    this._commitEmail = value;
  }

  // commit_message - computed: true, optional: true, required: false
  private _commitMessage?: string;
  public get commitMessage() {
    return this._commitMessage ?? this.getStringAttribute('commit_message');
  }
  public set commitMessage(value: string | undefined) {
    this._commitMessage = value;
  }

  // content - computed: false, optional: false, required: true
  private _content: string;
  public get content() {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }

  // file - computed: false, optional: false, required: true
  private _file: string;
  public get file() {
    return this._file;
  }
  public set file(value: string) {
    this._file = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this._repository;
  }
  public set repository(value: string) {
    this._repository = value;
  }

  // sha - computed: true, optional: false, required: true
  public get sha() {
    return this.getStringAttribute('sha');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: this._branch,
      commit_author: this._commitAuthor,
      commit_email: this._commitEmail,
      commit_message: this._commitMessage,
      content: this._content,
      file: this._file,
      repository: this._repository,
    };
  }
}
