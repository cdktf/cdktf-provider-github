// https://www.terraform.io/docs/providers/github/r/repository_pull_request.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryPullRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request.html#base_ref RepositoryPullRequest#base_ref}
  */
  readonly baseRef: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request.html#base_repository RepositoryPullRequest#base_repository}
  */
  readonly baseRepository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request.html#body RepositoryPullRequest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request.html#head_ref RepositoryPullRequest#head_ref}
  */
  readonly headRef: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request.html#maintainer_can_modify RepositoryPullRequest#maintainer_can_modify}
  */
  readonly maintainerCanModify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request.html#owner RepositoryPullRequest#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request.html#title RepositoryPullRequest#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request.html github_repository_pull_request}
*/
export class RepositoryPullRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_repository_pull_request";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/repository_pull_request.html github_repository_pull_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryPullRequestConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryPullRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_pull_request',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._baseRef = config.baseRef;
    this._baseRepository = config.baseRepository;
    this._body = config.body;
    this._headRef = config.headRef;
    this._maintainerCanModify = config.maintainerCanModify;
    this._owner = config.owner;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_ref - computed: false, optional: false, required: true
  private _baseRef?: string; 
  public get baseRef() {
    return this.getStringAttribute('base_ref');
  }
  public set baseRef(value: string) {
    this._baseRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRefInput() {
    return this._baseRef
  }

  // base_repository - computed: false, optional: false, required: true
  private _baseRepository?: string; 
  public get baseRepository() {
    return this.getStringAttribute('base_repository');
  }
  public set baseRepository(value: string) {
    this._baseRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRepositoryInput() {
    return this._baseRepository
  }

  // base_sha - computed: true, optional: false, required: false
  public get baseSha() {
    return this.getStringAttribute('base_sha');
  }

  // body - computed: false, optional: true, required: false
  private _body?: string | undefined; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // draft - computed: true, optional: false, required: false
  public get draft() {
    return this.getBooleanAttribute('draft') as any;
  }

  // head_ref - computed: false, optional: false, required: true
  private _headRef?: string; 
  public get headRef() {
    return this.getStringAttribute('head_ref');
  }
  public set headRef(value: string) {
    this._headRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headRefInput() {
    return this._headRef
  }

  // head_sha - computed: true, optional: false, required: false
  public get headSha() {
    return this.getStringAttribute('head_sha');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // maintainer_can_modify - computed: false, optional: true, required: false
  private _maintainerCanModify?: boolean | cdktf.IResolvable | undefined; 
  public get maintainerCanModify() {
    return this.getBooleanAttribute('maintainer_can_modify') as any;
  }
  public set maintainerCanModify(value: boolean | cdktf.IResolvable | undefined) {
    this._maintainerCanModify = value;
  }
  public resetMaintainerCanModify() {
    this._maintainerCanModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainerCanModifyInput() {
    return this._maintainerCanModify
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // opened_at - computed: true, optional: false, required: false
  public get openedAt() {
    return this.getNumberAttribute('opened_at');
  }

  // opened_by - computed: true, optional: false, required: false
  public get openedBy() {
    return this.getStringAttribute('opened_by');
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string | undefined; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string | undefined) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_ref: cdktf.stringToTerraform(this._baseRef),
      base_repository: cdktf.stringToTerraform(this._baseRepository),
      body: cdktf.stringToTerraform(this._body),
      head_ref: cdktf.stringToTerraform(this._headRef),
      maintainer_can_modify: cdktf.booleanToTerraform(this._maintainerCanModify),
      owner: cdktf.stringToTerraform(this._owner),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
