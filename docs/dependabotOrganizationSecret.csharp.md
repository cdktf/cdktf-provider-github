# `github_dependabot_organization_secret`

Refer to the Terraform Registory for docs: [`github_dependabot_organization_secret`](https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/dependabot_organization_secret).

# `dependabotOrganizationSecret` Submodule <a name="`dependabotOrganizationSecret` Submodule" id="@cdktf/provider-github.dependabotOrganizationSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DependabotOrganizationSecret <a name="DependabotOrganizationSecret" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/dependabot_organization_secret github_dependabot_organization_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DependabotOrganizationSecret(Construct Scope, string Id, DependabotOrganizationSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig">DependabotOrganizationSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig">DependabotOrganizationSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetEncryptedValue">ResetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetPlaintextValue">ResetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetSelectedRepositoryIds">ResetSelectedRepositoryIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEncryptedValue` <a name="ResetEncryptedValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetEncryptedValue"></a>

```csharp
private void ResetEncryptedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlaintextValue` <a name="ResetPlaintextValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetPlaintextValue"></a>

```csharp
private void ResetPlaintextValue()
```

##### `ResetSelectedRepositoryIds` <a name="ResetSelectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.resetSelectedRepositoryIds"></a>

```csharp
private void ResetSelectedRepositoryIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DependabotOrganizationSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DependabotOrganizationSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DependabotOrganizationSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValueInput">EncryptedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValueInput">PlaintextValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `EncryptedValueInput`<sup>Optional</sup> <a name="EncryptedValueInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValueInput"></a>

```csharp
public string EncryptedValueInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PlaintextValueInput`<sup>Optional</sup> <a name="PlaintextValueInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValueInput"></a>

```csharp
public string PlaintextValueInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIdsInput"></a>

```csharp
public double[] SelectedRepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `EncryptedValue`<sup>Required</sup> <a name="EncryptedValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PlaintextValue`<sup>Required</sup> <a name="PlaintextValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; }
```

- *Type:* double[]

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DependabotOrganizationSecretConfig <a name="DependabotOrganizationSecretConfig" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DependabotOrganizationSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecretName,
    string Visibility,
    string EncryptedValue = null,
    string Id = null,
    string PlaintextValue = null,
    double[] SelectedRepositoryIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.secretName">SecretName</a></code> | <code>string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.visibility">Visibility</a></code> | <code>string</code> | Configures the access that repositories have to the organization secret. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | An array of repository ids that can access the organization secret. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/dependabot_organization_secret#secret_name DependabotOrganizationSecret#secret_name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Configures the access that repositories have to the organization secret.

Must be one of 'all', 'private' or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/dependabot_organization_secret#visibility DependabotOrganizationSecret#visibility}

---

##### `EncryptedValue`<sup>Optional</sup> <a name="EncryptedValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; set; }
```

- *Type:* string

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/dependabot_organization_secret#encrypted_value DependabotOrganizationSecret#encrypted_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/dependabot_organization_secret#id DependabotOrganizationSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlaintextValue`<sup>Optional</sup> <a name="PlaintextValue" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; set; }
```

- *Type:* string

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/dependabot_organization_secret#plaintext_value DependabotOrganizationSecret#plaintext_value}

---

##### `SelectedRepositoryIds`<sup>Optional</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.dependabotOrganizationSecret.DependabotOrganizationSecretConfig.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; set; }
```

- *Type:* double[]

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.39.0/docs/resources/dependabot_organization_secret#selected_repository_ids DependabotOrganizationSecret#selected_repository_ids}

---



