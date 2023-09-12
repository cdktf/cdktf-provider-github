# `github_release`

Refer to the Terraform Registory for docs: [`github_release`](https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release).

# `release` Submodule <a name="`release` Submodule" id="@cdktf/provider-github.release"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Release <a name="Release" id="@cdktf/provider-github.release.Release"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release github_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.release.Release.Initializer"></a>

```python
from cdktf_cdktf_provider_github import release

release.Release(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: str,
  tag_name: str,
  body: str = None,
  discussion_category_name: str = None,
  draft: typing.Union[bool, IResolvable] = None,
  generate_release_notes: typing.Union[bool, IResolvable] = None,
  id: str = None,
  name: str = None,
  prerelease: typing.Union[bool, IResolvable] = None,
  target_commitish: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.tagName">tag_name</a></code> | <code>str</code> | The name of the tag. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.body">body</a></code> | <code>str</code> | Text describing the contents of the tag. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.discussionCategoryName">discussion_category_name</a></code> | <code>str</code> | If specified, a discussion of the specified category is created and linked to the release. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.draft">draft</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'false' to create a published release. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.generateReleaseNotes">generate_release_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to automatically generate the name and body for this release. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#id Release#id}. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the release. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.prerelease">prerelease</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'false' to identify the release as a full release. |
| <code><a href="#@cdktf/provider-github.release.Release.Initializer.parameter.targetCommitish">target_commitish</a></code> | <code>str</code> | The branch name or commit SHA the tag is created from. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.release.Release.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.release.Release.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.release.Release.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.release.Release.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.release.Release.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.release.Release.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.release.Release.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.release.Release.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.release.Release.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.release.Release.Initializer.parameter.repository"></a>

- *Type:* str

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#repository Release#repository}

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-github.release.Release.Initializer.parameter.tagName"></a>

- *Type:* str

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#tag_name Release#tag_name}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-github.release.Release.Initializer.parameter.body"></a>

- *Type:* str

Text describing the contents of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#body Release#body}

---

##### `discussion_category_name`<sup>Optional</sup> <a name="discussion_category_name" id="@cdktf/provider-github.release.Release.Initializer.parameter.discussionCategoryName"></a>

- *Type:* str

If specified, a discussion of the specified category is created and linked to the release.

The value must be a category that already exists in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#discussion_category_name Release#discussion_category_name}

---

##### `draft`<sup>Optional</sup> <a name="draft" id="@cdktf/provider-github.release.Release.Initializer.parameter.draft"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'false' to create a published release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#draft Release#draft}

---

##### `generate_release_notes`<sup>Optional</sup> <a name="generate_release_notes" id="@cdktf/provider-github.release.Release.Initializer.parameter.generateReleaseNotes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to automatically generate the name and body for this release.

If 'name' is specified, the specified name will be used; otherwise, a name will be automatically generated. If 'body' is specified, the body will be pre-pended to the automatically generated notes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#generate_release_notes Release#generate_release_notes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.release.Release.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#id Release#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.release.Release.Initializer.parameter.name"></a>

- *Type:* str

The name of the release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#name Release#name}

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@cdktf/provider-github.release.Release.Initializer.parameter.prerelease"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'false' to identify the release as a full release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#prerelease Release#prerelease}

---

##### `target_commitish`<sup>Optional</sup> <a name="target_commitish" id="@cdktf/provider-github.release.Release.Initializer.parameter.targetCommitish"></a>

- *Type:* str

The branch name or commit SHA the tag is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#target_commitish Release#target_commitish}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.release.Release.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.release.Release.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.release.Release.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.release.Release.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetDiscussionCategoryName">reset_discussion_category_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetDraft">reset_draft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetGenerateReleaseNotes">reset_generate_release_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetPrerelease">reset_prerelease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.resetTargetCommitish">reset_target_commitish</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.release.Release.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.release.Release.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.release.Release.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.release.Release.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.release.Release.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.release.Release.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.release.Release.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.release.Release.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.release.Release.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.release.Release.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.release.Release.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.release.Release.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.release.Release.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.release.Release.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.release.Release.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.release.Release.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.release.Release.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.release.Release.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.release.Release.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.release.Release.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.release.Release.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.release.Release.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.release.Release.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.release.Release.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.release.Release.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.release.Release.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.release.Release.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.release.Release.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.release.Release.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_body` <a name="reset_body" id="@cdktf/provider-github.release.Release.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_discussion_category_name` <a name="reset_discussion_category_name" id="@cdktf/provider-github.release.Release.resetDiscussionCategoryName"></a>

```python
def reset_discussion_category_name() -> None
```

##### `reset_draft` <a name="reset_draft" id="@cdktf/provider-github.release.Release.resetDraft"></a>

```python
def reset_draft() -> None
```

##### `reset_generate_release_notes` <a name="reset_generate_release_notes" id="@cdktf/provider-github.release.Release.resetGenerateReleaseNotes"></a>

```python
def reset_generate_release_notes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.release.Release.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-github.release.Release.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_prerelease` <a name="reset_prerelease" id="@cdktf/provider-github.release.Release.resetPrerelease"></a>

```python
def reset_prerelease() -> None
```

##### `reset_target_commitish` <a name="reset_target_commitish" id="@cdktf/provider-github.release.Release.resetTargetCommitish"></a>

```python
def reset_target_commitish() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.release.Release.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.release.Release.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import release

release.Release.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.release.Release.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.release.Release.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import release

release.Release.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.release.Release.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.release.Release.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import release

release.Release.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.release.Release.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.release.Release.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.discussionCategoryNameInput">discussion_category_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.draftInput">draft_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.generateReleaseNotesInput">generate_release_notes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.prereleaseInput">prerelease_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.tagNameInput">tag_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.targetCommitishInput">target_commitish_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.discussionCategoryName">discussion_category_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.draft">draft</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.generateReleaseNotes">generate_release_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.prerelease">prerelease</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.tagName">tag_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.Release.property.targetCommitish">target_commitish</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.release.Release.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.release.Release.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.release.Release.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.release.Release.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.release.Release.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.release.Release.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.release.Release.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.release.Release.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.release.Release.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.release.Release.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.release.Release.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.release.Release.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.release.Release.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.release.Release.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.release.Release.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-github.release.Release.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `discussion_category_name_input`<sup>Optional</sup> <a name="discussion_category_name_input" id="@cdktf/provider-github.release.Release.property.discussionCategoryNameInput"></a>

```python
discussion_category_name_input: str
```

- *Type:* str

---

##### `draft_input`<sup>Optional</sup> <a name="draft_input" id="@cdktf/provider-github.release.Release.property.draftInput"></a>

```python
draft_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `generate_release_notes_input`<sup>Optional</sup> <a name="generate_release_notes_input" id="@cdktf/provider-github.release.Release.property.generateReleaseNotesInput"></a>

```python
generate_release_notes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.release.Release.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.release.Release.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `prerelease_input`<sup>Optional</sup> <a name="prerelease_input" id="@cdktf/provider-github.release.Release.property.prereleaseInput"></a>

```python
prerelease_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.release.Release.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tag_name_input`<sup>Optional</sup> <a name="tag_name_input" id="@cdktf/provider-github.release.Release.property.tagNameInput"></a>

```python
tag_name_input: str
```

- *Type:* str

---

##### `target_commitish_input`<sup>Optional</sup> <a name="target_commitish_input" id="@cdktf/provider-github.release.Release.property.targetCommitishInput"></a>

```python
target_commitish_input: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-github.release.Release.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `discussion_category_name`<sup>Required</sup> <a name="discussion_category_name" id="@cdktf/provider-github.release.Release.property.discussionCategoryName"></a>

```python
discussion_category_name: str
```

- *Type:* str

---

##### `draft`<sup>Required</sup> <a name="draft" id="@cdktf/provider-github.release.Release.property.draft"></a>

```python
draft: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `generate_release_notes`<sup>Required</sup> <a name="generate_release_notes" id="@cdktf/provider-github.release.Release.property.generateReleaseNotes"></a>

```python
generate_release_notes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.release.Release.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.release.Release.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prerelease`<sup>Required</sup> <a name="prerelease" id="@cdktf/provider-github.release.Release.property.prerelease"></a>

```python
prerelease: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.release.Release.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-github.release.Release.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

---

##### `target_commitish`<sup>Required</sup> <a name="target_commitish" id="@cdktf/provider-github.release.Release.property.targetCommitish"></a>

```python
target_commitish: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.Release.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.release.Release.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ReleaseConfig <a name="ReleaseConfig" id="@cdktf/provider-github.release.ReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.release.ReleaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import release

release.ReleaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: str,
  tag_name: str,
  body: str = None,
  discussion_category_name: str = None,
  draft: typing.Union[bool, IResolvable] = None,
  generate_release_notes: typing.Union[bool, IResolvable] = None,
  id: str = None,
  name: str = None,
  prerelease: typing.Union[bool, IResolvable] = None,
  target_commitish: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.repository">repository</a></code> | <code>str</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.tagName">tag_name</a></code> | <code>str</code> | The name of the tag. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.body">body</a></code> | <code>str</code> | Text describing the contents of the tag. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.discussionCategoryName">discussion_category_name</a></code> | <code>str</code> | If specified, a discussion of the specified category is created and linked to the release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.draft">draft</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'false' to create a published release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.generateReleaseNotes">generate_release_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'true' to automatically generate the name and body for this release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#id Release#id}. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.name">name</a></code> | <code>str</code> | The name of the release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.prerelease">prerelease</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to 'false' to identify the release as a full release. |
| <code><a href="#@cdktf/provider-github.release.ReleaseConfig.property.targetCommitish">target_commitish</a></code> | <code>str</code> | The branch name or commit SHA the tag is created from. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.release.ReleaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.release.ReleaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.release.ReleaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.release.ReleaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.release.ReleaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.release.ReleaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.release.ReleaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.release.ReleaseConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#repository Release#repository}

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-github.release.ReleaseConfig.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#tag_name Release#tag_name}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-github.release.ReleaseConfig.property.body"></a>

```python
body: str
```

- *Type:* str

Text describing the contents of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#body Release#body}

---

##### `discussion_category_name`<sup>Optional</sup> <a name="discussion_category_name" id="@cdktf/provider-github.release.ReleaseConfig.property.discussionCategoryName"></a>

```python
discussion_category_name: str
```

- *Type:* str

If specified, a discussion of the specified category is created and linked to the release.

The value must be a category that already exists in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#discussion_category_name Release#discussion_category_name}

---

##### `draft`<sup>Optional</sup> <a name="draft" id="@cdktf/provider-github.release.ReleaseConfig.property.draft"></a>

```python
draft: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'false' to create a published release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#draft Release#draft}

---

##### `generate_release_notes`<sup>Optional</sup> <a name="generate_release_notes" id="@cdktf/provider-github.release.ReleaseConfig.property.generateReleaseNotes"></a>

```python
generate_release_notes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'true' to automatically generate the name and body for this release.

If 'name' is specified, the specified name will be used; otherwise, a name will be automatically generated. If 'body' is specified, the body will be pre-pended to the automatically generated notes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#generate_release_notes Release#generate_release_notes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.release.ReleaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#id Release#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-github.release.ReleaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#name Release#name}

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@cdktf/provider-github.release.ReleaseConfig.property.prerelease"></a>

```python
prerelease: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to 'false' to identify the release as a full release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#prerelease Release#prerelease}

---

##### `target_commitish`<sup>Optional</sup> <a name="target_commitish" id="@cdktf/provider-github.release.ReleaseConfig.property.targetCommitish"></a>

```python
target_commitish: str
```

- *Type:* str

The branch name or commit SHA the tag is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/release#target_commitish Release#target_commitish}

---



