# `data_github_repository_autolink_references`

Refer to the Terraform Registory for docs: [`data_github_repository_autolink_references`](https://registry.terraform.io/providers/integrations/github/5.26.0/docs/data-sources/repository_autolink_references).

# `dataGithubRepositoryAutolinkReferences` Submodule <a name="`dataGithubRepositoryAutolinkReferences` Submodule" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryAutolinkReferences <a name="DataGithubRepositoryAutolinkReferences" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/data-sources/repository_autolink_references github_repository_autolink_references}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_autolink_references

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/data-sources/repository_autolink_references#repository DataGithubRepositoryAutolinkReferences#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/data-sources/repository_autolink_references#id DataGithubRepositoryAutolinkReferences#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/data-sources/repository_autolink_references#repository DataGithubRepositoryAutolinkReferences#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/data-sources/repository_autolink_references#id DataGithubRepositoryAutolinkReferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_autolink_references

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_autolink_references

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_autolink_references

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.autolinkReferences">autolink_references</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList">DataGithubRepositoryAutolinkReferencesAutolinkReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autolink_references`<sup>Required</sup> <a name="autolink_references" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.autolinkReferences"></a>

```python
autolink_references: DataGithubRepositoryAutolinkReferencesAutolinkReferencesList
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList">DataGithubRepositoryAutolinkReferencesAutolinkReferencesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryAutolinkReferencesAutolinkReferences <a name="DataGithubRepositoryAutolinkReferencesAutolinkReferences" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_autolink_references

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences()
```


### DataGithubRepositoryAutolinkReferencesConfig <a name="DataGithubRepositoryAutolinkReferencesConfig" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_autolink_references

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/data-sources/repository_autolink_references#repository DataGithubRepositoryAutolinkReferences#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/data-sources/repository_autolink_references#id DataGithubRepositoryAutolinkReferences#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/data-sources/repository_autolink_references#repository DataGithubRepositoryAutolinkReferences#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.26.0/docs/data-sources/repository_autolink_references#id DataGithubRepositoryAutolinkReferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryAutolinkReferencesAutolinkReferencesList <a name="DataGithubRepositoryAutolinkReferencesAutolinkReferencesList" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_autolink_references

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference <a name="DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import data_github_repository_autolink_references

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.isAlphanumeric">is_alphanumeric</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.keyPrefix">key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.targetUrlTemplate">target_url_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences">DataGithubRepositoryAutolinkReferencesAutolinkReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_alphanumeric`<sup>Required</sup> <a name="is_alphanumeric" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.isAlphanumeric"></a>

```python
is_alphanumeric: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_prefix`<sup>Required</sup> <a name="key_prefix" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.keyPrefix"></a>

```python
key_prefix: str
```

- *Type:* str

---

##### `target_url_template`<sup>Required</sup> <a name="target_url_template" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.targetUrlTemplate"></a>

```python
target_url_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataGithubRepositoryAutolinkReferencesAutolinkReferences
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences">DataGithubRepositoryAutolinkReferencesAutolinkReferences</a>

---


