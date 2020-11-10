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
    return this.getStringAttribute('branch');
  }
  public set branch(value: string ) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch
  }

  // commit_author - computed: true, optional: true, required: false
  private _commitAuthor?: string;
  public get commitAuthor() {
    return this.getStringAttribute('commit_author');
  }
  public set commitAuthor(value: string) {
    this._commitAuthor = value;
  }
  public resetCommitAuthor() {
    this._commitAuthor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitAuthorInput() {
    return this._commitAuthor
  }

  // commit_email - computed: true, optional: true, required: false
  private _commitEmail?: string;
  public get commitEmail() {
    return this.getStringAttribute('commit_email');
  }
  public set commitEmail(value: string) {
    this._commitEmail = value;
  }
  public resetCommitEmail() {
    this._commitEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitEmailInput() {
    return this._commitEmail
  }

  // commit_message - computed: true, optional: true, required: false
  private _commitMessage?: string;
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
  public set commitMessage(value: string) {
    this._commitMessage = value;
  }
  public resetCommitMessage() {
    this._commitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageInput() {
    return this._commitMessage
  }

  // content - computed: false, optional: false, required: true
  private _content: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // file - computed: false, optional: false, required: true
  private _file: string;
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // sha - computed: true, optional: false, required: false
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
