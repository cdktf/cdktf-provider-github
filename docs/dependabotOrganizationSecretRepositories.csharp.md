# `github_dependabot_organization_secret_repositories`

Refer to the Terraform Registory for docs: [`github_dependabot_organization_secret_repositories`](https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/dependabot_organization_secret_repositories).

# `dependabotOrganizationSecretRepositories` Submodule <a name="`dependabotOrganizationSecretRepositories` Submodule" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DependabotOrganizationSecretRepositories <a name="DependabotOrganizationSecretRepositories" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/dependabot_organization_secret_repositories github_dependabot_organization_secret_repositories}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DependabotOrganizationSecretRepositories(Construct Scope, string Id, DependabotOrganizationSecretRepositoriesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig">DependabotOrganizationSecretRepositoriesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig">DependabotOrganizationSecretRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DependabotOrganizationSecretRepositories.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DependabotOrganizationSecretRepositories.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DependabotOrganizationSecretRepositories.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.selectedRepositoryIdsInput"></a>

```csharp
public double[] SelectedRepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; }
```

- *Type:* double[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositories.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DependabotOrganizationSecretRepositoriesConfig <a name="DependabotOrganizationSecretRepositoriesConfig" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DependabotOrganizationSecretRepositoriesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecretName,
    double[] SelectedRepositoryIds,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.secretName">SecretName</a></code> | <code>string</code> | Name of the existing secret. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | An array of repository ids that can access the organization secret. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/dependabot_organization_secret_repositories#id DependabotOrganizationSecretRepositories#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the existing secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/dependabot_organization_secret_repositories#secret_name DependabotOrganizationSecretRepositories#secret_name}

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; set; }
```

- *Type:* double[]

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/dependabot_organization_secret_repositories#selected_repository_ids DependabotOrganizationSecretRepositories#selected_repository_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dependabotOrganizationSecretRepositories.DependabotOrganizationSecretRepositoriesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.23.0/docs/resources/dependabot_organization_secret_repositories#id DependabotOrganizationSecretRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



